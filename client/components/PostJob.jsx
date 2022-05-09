import React, { useState } from 'react'
import * as api from '../apis'
import { createJob } from '../actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// TODO: check if this works from top level in app, if so, individual SkipNavContent in this component as it would double up.
import { SkipNavContent } from '@chakra-ui/skip-nav'
import {
  // distribute element(s) vertically
  VStack,
  // distribute element(s) horizontally
  HStack,
  // renders a div
  Box,
  // can be defined as h1, h2, h3, etc.
  Heading,
  // renders <p> tag by default
  Text,
  // visually hidden allows you to add text for a screen reader that will not show up visually on the screen
  VisuallyHidden,
  // links go somewhere
  Link,
  // buttons do things
  Button,
  // groups buttons w/related actions
  // ButtonGroup,
  // Icon
  Icon,
  // list components
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  // colors
  useColorMode,
  UseColorModeValue,
  // -- FORM SPECIFIC --
  // Form components must be wrapped by FormControl, or else you will get misleading error messages
  // FormControl passes id to Input as id, and to FormLabel as htmlFor
  FormControl,
  // label an input
  FormLabel,
  // input text
  Input,
  InputGroup,
  InputLeftElement,
  // multiple lines of text
  Textarea,
  //  tells more details about the form section
  FormHelperText,
  // message that shows up when an error occurs
  FormErrorMessage,
  // select one choice from options
  Radio,
  RadioGroup,
  Stack,
  // checkbox
  CheckboxGroup,
  Checkbox,
} from '@chakra-ui/react'
import { BsFillHandIndexThumbFill, BsChatTextFill } from 'react-icons/bs'
import {
  MdPerson,
  MdLocationPin,
  MdAttachMoney,
  MdWork,
  MdDescription,
} from 'react-icons/md'
import { FaCalendarAlt, FaHandshake, FaTools } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { useAuth0 } from '@auth0/auth0-react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

function PostJob() {
  const { user } = useAuth0()
  // console.log(user.sub)
  // // to get the auth0Id -> user.sub
  // userId: user.sub
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  // console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need
  const handleAddressChange = (evt) => {
    setAddress(evt.target.value)
    api
      // auto-complete address field
      .getAutocompleteAddresses(evt.target.value)
      .then((res) => {
        setAddresses(res)
      })
      .catch((err) => console.log(err))
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newJob, setNewJob] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    description: '',
    requirements: '',
    type: '',
    contactBy: '',
    occurrence: '',
    when: '',
    pay: '',
    accepted: false,
    accepterId: '',
  })

  function handleInputChange(evt) {
    console.log(evt)
    setNewJob({
      ...newJob,
      [evt.target.name]: evt.target.value,
    })
  }

  function handleValueChange(field, value) {
    console.log(field, value)
    setNewJob({
      ...newJob,
      [field]: value,
    })
  }

  function handleCheckboxChange(evt) {
    setNewJob((state) => ({
      ...state,
      contactBy: {
        ...state.contactBy,
        [evt.target.name]: evt.target.checked,
      },
    }))
  }

  // // TODO: make error messages work
  // function errorMessageExample() {
  //   const [input, setInput] = useState('')

  //   const handleInputChange = (evt) => setInput(evt.target.value)

  //   const isError = input === ''
  // }

  function handleSubmit(evt) {
    evt.preventDefault()
    // destructure address object (api data needs us to get the first item in the array)
    const { region, lon, lat } = addresses[0]

    const job = {
      ...newJob,
      contactBy: Object.keys(newJob.contactBy).filter(Boolean).join(','),
      /* (Prior to the above refactor with .filter(Boolean)) contactBy: Object.keys(newJob.contactBy).filter((key) => newJob.contactBy[key]).join(',') */
      /* Functionality Comment for Team's Learning:
        Object.keys(newJob.contactBy) -> e.g ['contactByText', 'contactByPhone']
        .join(",") -> "contactByText,contactByPhone"
      */
      /* NB: when reading contactBy data, split by commas to turn "contactByText,contactByPhone" back into ['contactByText', 'contactByPhone']
          .split(",")
        Note on how to read contactBy data:
          "contactByText,contactByPhone"
          .split(",") -> ['contactByText', 'contactByPhone']
          let key = {
            contactByText: 'text',
            contactByPhone: 'phone',
            contactByEmail: 'email'
          }
          key[contactBy]
      */
      userId: user.sub,
      region,
      lon,
      lat,
    }
    dispatch(createJob(job))
    // TODO: navigate to newly added Job (once job details view is live). Possibly, with async await (after getting id back)
    navigate('/')
  }

  return (
    <>
      <SkipNavContent>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="gray.50"
        >
          <Heading as="h1" size="xl" alignSelf="center">
            List a Job
          </Heading>
          {/* STRETCH: Translate form */}
          <Box
            bg="#B2F5EA"
            boxShadow="lg"
            w="100%"
            color="#black"
            padding="10px"
            borderRadius="lg"
          >
            <Heading as="h2" size="sm" textAlign="left">
              Form Instructions
            </Heading>
            <UnorderedList fontSize="md" textAlign="left">
              {/* a11y: provide instructions on what the form requires */}
              {/* a11y: say how long the form will take to complete. Make sure form does not time out.
            TODO: enable save as you go */}
              <ListItem>Time to complete ~ 30 minutes</ListItem>
              <ListItem>
                All fields marked “required” must be completed.
              </ListItem>
              <ListItem>
                Data entered will be viewed by the public. Please use discretion
                with sharing personal information.
              </ListItem>
              <ListItem>
                The address field contains an autocomplete option.
              </ListItem>
              <ListItem>
                Extra help can be found immediately after each field.
              </ListItem>
            </UnorderedList>
          </Box>
          <VisuallyHidden>
            <Heading as="h3">Job Form</Heading>
          </VisuallyHidden>
          {/* a11y: form fields in a logical order to tab through */}
          {/* TODO a11y: highlight field when tabbing through */}
          {/* a11y: define what the fields require. Ex: if in a particular format */}

          {/* OCCURRENCE */}
          {/* a11y: short & specific labels, associated with form field */}
          <FormControl id="occurrence">
            <FormLabel>How often does this job need to be done?</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={FiRepeat} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                // _focus={{ background: 'white', borderColor: "purple.700"}}
                variant="flushed"
                name="occurrence"
                value={newJob.occurrence}
                onChange={handleInputChange}
              />
            </InputGroup>
            <FormHelperText color="cyan.900">
              One-off, weekly, or monthly
            </FormHelperText>
          </FormControl>

          {/* TYPE */}
          <FormControl as="fieldset" id="type" isRequired>
            <FormLabel as="legend">
              Type of job <em aria-hidden="true">(Required)</em>
            </FormLabel>
            <RadioGroup
              colorScheme="purple"
              name="type"
              value={newJob.type}
              onChange={(value) => handleValueChange('type', value)}
              isFocusable
            >
              <Stack spacing={5} direction="row">
                <Radio bg="cyan.100" value="paid" id="paid" aria-label="paid">
                  Paid <Icon as={MdAttachMoney} w={6} h={6} />
                </Radio>
                <Radio
                  bg="cyan.100"
                  value="volunteer"
                  id="volunteer"
                  aria-label="volunteer"
                >
                  Volunteer <Icon as={FaHandshake} w={6} h={6} />
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {/* PAY */}
          <FormControl id="pay">
            <FormLabel>If paid, what is the rate per hour? </FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={MdAttachMoney} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                name="pay"
                value={newJob.pay}
                onChange={handleInputChange}
              />
            </InputGroup>
            <FormHelperText color="cyan.900">
              Paid jobs must not pay less than the{' '}
              <Link
                href="https://www.employment.govt.nz/hours-and-wages/pay/minimum-wage/minimum-wage-rates/"
                aria-label="minimum wage rates"
              >
                minimum wage
              </Link>
            </FormHelperText>
          </FormControl>

          {/* WHEN */}
          <FormControl id="when">
            <FormLabel>Start Date</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={FaCalendarAlt} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                name="when"
                value={newJob.when}
                onSubmit={handleSubmit}
                onChange={handleInputChange}
              />
            </InputGroup>
            <FormHelperText color="cyan.900">
              Anytime, ASAP, or DD/MM/YYYY
            </FormHelperText>
          </FormControl>

          {/* ADDRESS */}
          {/* TODO: ensure address field is accessible 
              & TEST if autocomplete is accessible */}
          <FormControl id="address" isRequired>
            <FormLabel>
              Address <em aria-hidden="true">(Required)</em>
            </FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={MdLocationPin} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                list="addresses"
                name="address"
                value={address}
                onChange={handleAddressChange}
              />
            </InputGroup>
            <datalist id="addresses" name="addresses">
              {addresses.map((address, idx) => (
                <option value={address.formatted} key={`address-${idx}`} />
              ))}
            </datalist>
            <FormHelperText color="cyan.900">
              For safety, we suggest setting the address to a landmark near the
              job site, such as a library or grocery store
            </FormHelperText>
          </FormControl>

          {/* NAME */}
          <FormControl id="name" isRequired>
            <FormLabel>
              Name <em aria-hidden="true">(Required)</em>
            </FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={MdPerson} w={8} h={8} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                name="name"
                value={newJob.name}
                onSubmit={handleSubmit}
                onChange={handleInputChange}
              />
            </InputGroup>
            <FormHelperText color="cyan.900">
              Contact person&apos;s details
            </FormHelperText>
          </FormControl>

          {/* EMAIL */}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={EmailIcon} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                type="email"
                value={newJob.email}
                onSubmit={handleSubmit}
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormControl>

          {/* PHONE */}
          {/* a11y: phone number should not be required */}
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={PhoneIcon} w={5} h={5} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                name="phone"
                type="tel"
                value={newJob.phone}
                onSubmit={handleSubmit}
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormControl>

          {/* CONTACT */}
          <FormControl as="fieldset" id="contactBy">
            <FormLabel as="legend" htmlFor="contactBy">
              What&apos;s the best way to get in touch?
            </FormLabel>
            {/* TODO: Add isFocusable ? */}
            <CheckboxGroup
              size="md"
              colorScheme="purple"
              name="contactBy"
              isFocusable
            >
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox
                  // added id for lighthouse unique input requirement
                  borderColor="cyan.500"
                  id="contactByEmail"
                  isChecked={newJob.contactBy.contactByEmail}
                  name="contactByEmail"
                  onChange={handleCheckboxChange}
                  aria-label="email"
                >
                  Email <Icon as={EmailIcon} w={6} h={6} />
                </Checkbox>
                <Checkbox
                  borderColor="cyan.500"
                  id="contactByPhone"
                  isChecked={newJob.contactBy.contactByPhone}
                  name="contactByPhone"
                  onChange={handleCheckboxChange}
                  aria-label="phone"
                >
                  Phone <Icon as={PhoneIcon} w={5} h={5} />
                </Checkbox>
                <Checkbox
                  borderColor="cyan.500"
                  id="contactByText"
                  isChecked={newJob.contactBy.contactByText}
                  name="contactByText"
                  onChange={handleCheckboxChange}
                  aria-label="text"
                >
                  Text <Icon as={BsChatTextFill} w={6} h={6} />
                </Checkbox>
              </Stack>
            </CheckboxGroup>
            {/* <FormHelperText>
              How would you like job seekers to contact you?
            </FormHelperText> */}
          </FormControl>

          {/* TITLE */}
          <FormControl id="title" isRequired>
            <FormLabel>
              Title <em aria-hidden="true">(Required)</em>
            </FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={MdWork} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                name="title"
                type="title"
                value={newJob.title}
                onChange={handleInputChange}
              />
            </InputGroup>
            <FormHelperText color="cyan.900">
              A short, clear job title
            </FormHelperText>
          </FormControl>

          {/* DESCRIPTION */}
          <FormControl id="description">
            <FormLabel>
              Description <Icon as={MdDescription} w={6} h={6} />
            </FormLabel>
            <Textarea
              focusBorderColor="purple.700"
              bg="cyan.100"
              variant="flushed"
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
            />
            <FormHelperText color="cyan.900">
              Details about the job
            </FormHelperText>
          </FormControl>

          <FormControl id="requirements">
            <FormLabel>Special Requirements</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={FaTools} w={6} h={6} />
              </InputLeftElement>
              <Input
                focusBorderColor="purple.700"
                bg="cyan.100"
                variant="flushed"
                name="requirements"
                value={newJob.requirements}
                onChange={handleInputChange}
              />
            </InputGroup>
            <FormHelperText color="cyan.900">
              Such as a professional license, prior experience, the ability to
              lift 15kg
            </FormHelperText>
          </FormControl>

          {/* TODO: Any additional submit instructions?
          // Your advertisement must comply with our community guidelines to be posted. For information about our community guidelines, please read them.
          // Community guidelines pop up or link to a page with a link to return to form.
          */}
          <FormControl>
            <Button
              rightIcon={<BsFillHandIndexThumbFill />}
              colorScheme="purple"
              onClick={handleSubmit}
              size="lg"
            >
              Submit Form
            </Button>
            {/* // STRETCH TODO: Button to transform upon submit (for slow internet connections)
          <Button
            isLoading
            loadingText="Submitting"
            //TODO: ensure this isn't too faint on submit
            colorScheme="blue"
            variant="ghost"
            size="lg"
          ></Button> */}
          </FormControl>
        </VStack>
      </SkipNavContent>
    </>
  )
}

export default PostJob
