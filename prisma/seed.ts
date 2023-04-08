import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const leadsData: Prisma.LeadsCreateInput[] = [
  {
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    phone: '555-7890',
    company: 'Wilson Group',
    jobTitle: 'Marketing Manager',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    country_code: 'lk',
    website: 'https://www.wilsongroup.com',
    personalizationLine: 'Hi Emma',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Marketing'
  },
  {
    name: 'Adam Johnson',
    email: 'adam.johnson@example.com',
    phone: '555-1234',
    company: 'Johnson Consulting',
    jobTitle: 'Senior Consultant',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
    country_code: 'nz',
    website: 'https://www.johnsonconsulting.com',
    personalizationLine: 'Hi Adam',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Consulting'
  },
  {
    name: 'Sophie Kalm',
    email: 'sophie.kalm@example.com',
    phone: '555-4321',
    company: 'Kalm Technologies',
    jobTitle: 'IT Director',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    country_code: 'kr',
    website: 'https://www.leetechnologies.com',
    personalizationLine: 'Hi Sophie',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Technology'
  },
  {
    name: 'Benjamin Chen',
    email: 'benjamin.chen@example.com',
    phone: '555-5678',
    company: 'Chen Enterprises',
    jobTitle: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/92.jpg',
    country_code: 'tw',
    website: 'https://www.chenenterprises.com',
    personalizationLine: 'Hi Benjamin',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Business'
  },
  {
    name: 'Amanda Rodriguez',
    email: 'amanda.rodriguez@example.com',
    phone: '555-2468',
    company: 'Rodriguez Holdings',
    jobTitle: 'Finance Director',
    image: 'https://randomuser.me/api/portraits/women/87.jpg',
    country_code: 'us',
    website: 'https://www.rodriguezholdings.com',
    personalizationLine: 'Hi Amanda',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Finance'
  },
  {
    name: 'Jack Smith',
    email: 'jack.smith@example.com',
    phone: '555-3698',
    company: 'Smith & Co',
    jobTitle: 'Sales Manager',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    country_code: 'gb',
    website: 'https://www.smithandco.com',
    personalizationLine: 'Hi Jack',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Sales'
  },
  {
    name: 'Isabella Perez',
    email: 'isabella.perez@example.com',
    phone: '555-9876',
    company: 'Perez Marketing',
    jobTitle: 'Marketing Coordinator',
    image: 'https://randomuser.me/api/portraits/women/74.jpg',
    country_code: 'mx',
    website: 'https://www.perezmarketing.com',
    personalizationLine: 'Hi Isabella',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Marketing'
  },
  {
    name: 'Ethan Taylor',
    email: 'ethan.taylor@example.com',
    phone: '555-2345',
    company: 'Taylor Industries',
    jobTitle: 'Production Manager',
    image: 'https://randomuser.me/api/portraits/men/79.jpg',
    country_code: 'ca',
    website: 'https://www.taylorindustries.com',
    personalizationLine: 'Hi Ethan',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Manufacturing'
  },
  {
    name: 'Chloe Lee',
    email: 'chloe.lee@example.com',
    phone: '555-6789',
    company: 'Lee Architecture',
    jobTitle: 'Architect',
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
    country_code: 'au',
    website: 'https://www.leearchitecture.com',
    personalizationLine: 'Hi Chloe',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Architecture'
  },
  {
    name: 'Noah Kim',
    email: 'noah.kim@example.com',
    phone: '555-3456',
    company: 'Kim & Kim Law Firm',
    jobTitle: 'Attorney',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    country_code: 'kr',
    website: 'https://www.kimandkimlaw.com',
    personalizationLine: 'Hi Noah',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Law'
  },
  {
    name: 'Aria Patel',
    email: 'aria.patel@example.com',
    phone: '555-9012',
    company: 'Patel Consulting',
    jobTitle: 'Business Analyst',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    country_code: 'in',
    website: 'https://www.patelconsulting.com',
    personalizationLine: 'Hi Aria',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Consulting'
  },
  {
    name: 'William Wong',
    email: 'william.wong@example.com',
    phone: '555-2468',
    company: 'Wong Financial Group',
    jobTitle: 'Financial Advisor',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    country_code: 'hk',
    website: 'https://www.wongfinancialgroup.com',
    personalizationLine: 'Hi William',
    isValidEmail: true,
    isApproved: true,
    comment: null,
    industry: 'Finance'
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of leadsData) {
    const lead = await prisma.leads.create({
      data: u,
    })
    console.log(`Created lead with id: ${lead.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
