import React, { useState } from 'react'
import * as api from '../apis'
import { createJob } from '../actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  // distribute element(s) vertically
  VStack,
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
  // list components
  // List,
  ListItem,
  // ListIcon,
  // OrderedList,
  UnorderedList,
  // colors
  // useColorMode,
  // UseColorModeValue,
  // -- FORM SPECIFIC --
  // Form components must be wrapped by FormControl, or else you will get misleading error messages
  // FormControl passes id to Input as id, and to FormLabel as htmlFor
  FormControl,
  // label an input
  FormLabel,
  // input text
  Input,
  // multiple lines of text
  Textarea,
  //  tells more details about the form section
  FormHelperText,
  // message that shows up when an error occurs
  // FormErrorMessage,
  // select one choice from options
  Radio,
  RadioGroup,
  Stack,
  // checkbox
  CheckboxGroup,
  Checkbox,
} from '@chakra-ui/react'
// icons from react-icons
import { BsFillHandIndexThumbFill } from 'react-icons/bs'
import { useAuth0 } from '@auth0/auth0-react'

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
    // const [region, lon, lat] = ['Auckland', '-35', '174']

    const job = {
      ...newJob,
      contactBy: Object.keys(newJob.contactBy).filter(Boolean),
      userId: user.sub,
      region,
      lon,
      lat,
    }
    // console.log(job)
    dispatch(createJob(job))
    // TODO: navigate to newly added Job (once job details view is live). Possibly, with async await (after getting id back)
    navigate('/')
  }

  console.log(newJob)

  return (
    <>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <Heading as="h1" size="xl" textAlign="left">
          List a Job
        </Heading>
        {/* STRETCH: Translate form */}
        <Box
          bg="purple"
          w="100%"
          color="white"
          padding="10px"
          borderRadius="lg"
        >
          <Heading as="h3" size="sm" textAlign="left">
            Form Instructions
          </Heading>
          <UnorderedList textAlign="left">
            {/* a11y: provide instructions on what the form requires */}
            {/* a11y: say how long the form will take to complete. Make sure form does not time out.
          TODO: enable save as you go */}
            <ListItem>Time to complete ~ 30 minutes</ListItem>
            <ListItem>All fields marked “required” must be completed.</ListItem>
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
        <Heading as="h2" size="md">
          Job Form
        </Heading>
        {/* a11y: form fields in a logical order to tab through */}
        {/* TODO a11y: highlight field when tabbing through */}
        {/* a11y: define what the fields require. Ex: if in a particular format */}

        {/* OCCURRENCE */}
        {/* a11y: short & specific labels, associated with form field */}
        <FormControl id="occurrence">
          <FormLabel>How often does this job need to be done?</FormLabel>
          <Input
            name="occurrence"
            value={newJob.occurrence}
            onChange={handleInputChange}
          />
          <FormHelperText>One-off, weekly, or monthly</FormHelperText>
        </FormControl>

        {/* TYPE */}
        <FormControl as="fieldset" id="type" isRequired>
          <FormLabel as="legend">Type of job</FormLabel>
          <RadioGroup
            variantColor="green"
            name="type"
            value={newJob.type}
            onChange={(value) => handleValueChange('type', value)}
          >
            <Stack spacing={5} direction="row">
              <Radio value="paid" id="paid" aria-label="paid">
                Paid
              </Radio>
              {/* <VisuallyHidden>Paid</VisuallyHidden> */}
              <Radio value="volunteer" id="volunteer" aria-label="paid">
                Volunteer
              </Radio>
              {/* <VisuallyHidden>Volunteer</VisuallyHidden> */}
            </Stack>
          </RadioGroup>
        </FormControl>

        {/* PAY */}
        <FormControl id="pay">
          <FormLabel>If a paid job, what is the rate per hour?</FormLabel>
          <Input name="pay" value={newJob.pay} onChange={handleInputChange} />
          <FormHelperText>
            The rate must not be less than the{' '}
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
          <Input
            name="when"
            value={newJob.when}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
          <FormHelperText>Anytime, ASAP, or DD/MM/YYYY</FormHelperText>
        </FormControl>

        {/* ADDRESS */}
        {/* TODO: ensure address field is accessible 
            & TEST if autocomplete is accessible */}
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            list="addresses"
            name="address"
            value={address}
            onChange={handleAddressChange}
          />
          <datalist id="addresses" name="addresses">
            {addresses.map((address, idx) => (
              <option value={address.formatted} key={`address-${idx}`} />
            ))}
          </datalist>
          <FormHelperText>
            For safety, we suggest setting the address to a landmark near the
            job site, such as a library or grocery store
          </FormHelperText>
        </FormControl>

        {/* NAME */}
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={newJob.name}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
          <FormHelperText>Contact person&apos;s details</FormHelperText>
        </FormControl>

        {/* EMAIL */}
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={newJob.email}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
        </FormControl>

        {/* PHONE */}
        {/* a11y: phone number should not be required */}
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input
            name="phone"
            type="tel"
            value={newJob.phone}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
        </FormControl>

        {/* CONTACT */}
        <FormControl as="fieldset" id="contactBy">
          <FormLabel as="legend" htmlFor="contactBy">
            What&apos;s the best way to get in touch?
          </FormLabel>
          {/* TODO: Add isFocusable ? */}
          <CheckboxGroup size="md" colorScheme="green" name="contactBy">
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox
                isChecked={newJob.contactBy.contactByEmail}
                name="contactByEmail"
                onChange={handleCheckboxChange}
              >
                Email
              </Checkbox>
              <Checkbox
                isChecked={newJob.contactBy.contactByPhone}
                name="contactByPhone"
                onChange={handleCheckboxChange}
              >
                Phone
              </Checkbox>
              <Checkbox
                isChecked={newJob.contactBy.contactByText}
                name="contactByText"
                onChange={handleCheckboxChange}
              >
                Text
              </Checkbox>
            </Stack>
          </CheckboxGroup>
          {/* <FormHelperText>
            How would you like job seekers to contact you?
          </FormHelperText> */}
        </FormControl>

        {/* TITLE */}
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            type="title"
            value={newJob.title}
            onChange={handleInputChange}
          />
          <FormHelperText>A short, clear job title</FormHelperText>
        </FormControl>

        {/* DESCRIPTION */}
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={newJob.description}
            onChange={handleInputChange}
          />
          <FormHelperText>Details about the job</FormHelperText>
        </FormControl>

        <FormControl id="requirements">
          <FormLabel>Special Requirements</FormLabel>
          <Input
            name="requirements"
            value={newJob.requirements}
            onChange={handleInputChange}
          />
          <FormHelperText>
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
            colorScheme="blue"
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
    </>
  )
}

export default PostJob
