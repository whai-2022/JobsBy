exports.seed = (knex) => {
  return knex('jobs').insert([
    {
      id: 1,
      userId: 'Auth0||something',
      name: 'Danielle',
      email: 'danielledabestx1000@gmail.com',
      phone: '0800 83 83 83',
      title: 'Make me a nice dinner',
      description:
        'Needing to have a nice dinner, please help me make one! I have an oven and a toaster.',
      requirements:
        '3 years experience as chef would be beneficial, but not essential. Need to be tall to reach counter.',
      typeId: 1,
      locationRegion: 'Auckland',
      locationSuburb: 'Gulf Harbour',
      pay: '$12/hour',
      accepted: false,
      accepterId: 'Auth0||hello',
    },
    {
      id: 2,
      userId: 'Auth0||bye',
      name: 'Bob',
      email: 'bob@gmail.com',
      phone: '022911010',
      title: 'Car Wash',
      description:
        'Simple car wash job, please come between 2pm - 5pm on Thursday or Friday',
      requirements:
        'No requirements, just bring yourself, will provide cleaning equipment',
      typeId: 1,
      locationRegion: 'Auckland',
      locationSuburb: 'Henderson',
      pay: '$20',
      accepted: false,
      accepterId: null,
    },
    {
      id: 3,
      userId: 'Auth0||something',
      name: 'Bob',
      email: 'bob@gmail.com',
      phone: '022911010',
      title: 'Car Wash',
      description:
        'Simple car wash job, please come between 2pm - 5pm on Thursday or Friday',
      requirements:
        'No requirements, just bring yourself, will provide cleaning equipment',
      typeId: 1,
      locationRegion: 'Auckland',
      locationSuburb: 'Henderson',
      pay: '$20',
      accepted: true,
      accepterId: 'Auth0||bye',
    },
  ])
}
