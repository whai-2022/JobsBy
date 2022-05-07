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
  //
  Heading,
  // renders <p> tag by default
  Text,
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
  // NB: every form component must be wrapped by FormControl, or else you will get misleading error messages
  FormControl,
  // label an input
  FormLabel,
  // input text
  Input,
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

// UNCOMMENT FOR AUTH0: import { useAuth0 } from '@auth0/auth0-react'

function PostJob() {
  // UNCOMMENT FOR AUTH0: const { user } = useAuth0()
  // to get the auth0Id -> user.sub

  // auto-complete address field
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([])
  console.log(addresses[0]) // after a valid address is selected, the first address object is the final address object we need
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
    api
      .getAutocompleteAddresses(e.target.value)
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

  function handleChange(evt) {
    setNewJob({
      ...newJob,
      [evt.target.name]: evt.target.value,
    })
  }

  // // TODO: make error message work
  // function errorMessageExample() {
  //   const [input, setInput] = useState('')

  //   const handleInputChange = (e) => setInput(e.target.value)

  //   const isError = input === ''
  // }

  function handleSubmit(evt) {
    evt.preventDefault()
    // destructure address object (api data needs us to get the first item in the array)
    const { region, lon, lat } = addresses[0]

    const job = {
      ...newJob,
      // UNCOMMENT FOR AUTH: userId: user.sub,
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
      <VStack w="full" h="full" p={10} spacing={10} align-items="flex-start">
        <Heading as="h1" size="xl" textAlign="left">
          List a Job
        </Heading>
        {/* STRETCH: Translate form */}
        {/* a11y #1 instructions on what the form will require */}
        {/* <em> If you want to edit a n existing job posting, please go to <Link to='' aria-label='my jobs'>MyJobs</Link>.</em> */}
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
            {/* a11y #2 say how long the form will take to complete. Make sure form does not time out.
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
        {/* a11y #3 form fields in a logical order to tab through */}
        {/* a11y #4 highlight field when tabbing through */}
        {/* a11y #6 define what the fields require if in a particular format 
        // phone number should not be required or if it is, allow text only option if absolutely necessary
        // How should we contact you? Dropdown: Phone Email Text*/}

        {/* OCCURRENCE */}
        {/* a11y #5 short & specific labels, associated with form field. <label for=''> to match <input id=''> */}
        <FormControl id="occurrence">
          <FormLabel htmlFor="occurrence">
            How often does this job need to be done?
          </FormLabel>
          {/* <RadioGroup>
            <Stack spacing={5} direction="row">
              <Radio colorScheme="" value="occurrence">
              Once
              </Radio>
              <Radio colorScheme="" value="occurrence">
              Recurring
              </Radio>
            </Stack>
          </RadioGroup> */}
          <Input
            name="occurrence"
            type="occurrence"
            value={newJob.occurrence}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <FormHelperText>One-off, weekly, or monthly</FormHelperText>
        </FormControl>

        {/* TYPE */}
        <FormControl id="type" isRequired>
          <FormLabel htmlFor="type">Type of job</FormLabel>
          <RadioGroup
            name="type"
            type="type"
            value={newJob.type}
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <Stack spacing={5} direction="row">
              <Radio>Paid</Radio>
              <Radio>Volunteer</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {/* PAY */}
        <FormControl id="pay">
          <FormLabel htmlFor="pay">
            If a paid job, what is the rate per hour?
          </FormLabel>
          <Input
            type="pay"
            name="pay"
            value={newJob.pay}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
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
          <FormLabel htmlFor="when">Start Date</FormLabel>
          <Input
            name="when"
            type="when"
            value={newJob.when}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <FormHelperText>Anytime, ASAP, or DD/MM/YYYY</FormHelperText>
        </FormControl>

        {/* ADDRESS */}
        {/* TODO: ensure address field is accessible 
            & TEST if autocomplete is accessible */}
        <FormControl id="when" isRequired>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            list="addresses"
            id="address"
            name="address"
            type="address"
            value={address}
            onChange={handleAddressChange}
          />
          <datalist id="addresses" name="addresses">
            {addresses.map((address, idx) => (
              <option value={address.formatted} key={`address-${idx}`} />
            ))}
          </datalist>
          <FormHelperText>
            For safety, we suggest setting the address to a landmark such as a
            library or grocery store
          </FormHelperText>
        </FormControl>

        {/* NAME */}
        <FormControl id="name" isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            name="name"
            type="name"
            value={newJob.name}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <FormHelperText>Contact person&apos;s details</FormHelperText>
        </FormControl>

        {/* EMAIL */}
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={newJob.email}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </FormControl>

        {/* PHONE */}
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            id="phone"
            name="phone"
            type="phone"
            value={newJob.phone}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </FormControl>

        {/* CONTACT */}
        <FormControl id="contactBy">
          <FormLabel htmlFor="contactBy">
            What&apos;s the best way to get in touch?
          </FormLabel>
          <CheckboxGroup
            size="md"
            colorScheme="green"
            name="contactBy"
            type="contactBy"
            value={newJob.contactBy}
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox>Email</Checkbox>
              <Checkbox>Phone</Checkbox>
              <Checkbox>Text</Checkbox>
            </Stack>
          </CheckboxGroup>
          {/* <RadioGroup
            id="contactBy"
            name="contactBy"
            type="contactBy"
            value={newJob.contactBy}
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <Stack spacing={5} direction="row">
              <Radio>Email</Radio>
              <Radio>Phone</Radio>
              <Radio>Text</Radio>
            </Stack>
          </RadioGroup> */}
          {/* <FormHelperText>
            How would you like job seekers to contact you?
          </FormHelperText> */}
        </FormControl>

        {/* TITLE */}
        <FormControl id="title" isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            name="title"
            type="title"
            value={newJob.title}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <FormHelperText>A short, clear job title.</FormHelperText>
        </FormControl>

        {/* DESCRIPTION */}
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            name="description"
            type="description"
            value={newJob.description}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <FormHelperText>Details about the job.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="requirements">Special Requirements</FormLabel>
          <Input
            id="requirements"
            name="requirements"
            type="requirements"
            value={newJob.requirements}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <FormHelperText>
            Examples: Professional license, prior experience, or the ability to
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
