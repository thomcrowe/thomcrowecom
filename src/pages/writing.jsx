import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Writing - Thom Crowep</title>
        <meta
          name="description"
          content="I&apos;m available to speak about all things Christmas, Anglo-Christianity, and growth/marketing.."
        />
      </Head>
      <SimpleLayout
        title="Articles I've written."
        intro="I'm write on topics ranging from Christmas to Anglo-Christianity, to tech, and all things growth and marketing."
      >
        <div className="space-y-20">
          <SpeakingSection title="Where to read my articles">
            <Appearance
              href="'https://misfitstheology.com/this-i-believe-creeds-in-christianity/"
              title="This I believe - Creeds in Christianity"
              description="Doctrine matters. It’s not possible to truly be one with diverse teachings. This is why we have creeds - to preserve the faith delivered once and for all - the faith handed to the Apostles by Christ and preserved unconquered by the Holy Spirit’s operation in the Church."
              event="Misfits Theology"
              cta="Read More"
            />
            <Appearance
              href="https://www.todaysamericancatholic.org/2020/04/faith-in-a-time-of-chaos/"
              title="Faith in a Time of Chaos"
              description="As the pandemic grows, it’s creating some honestly trying times. There are so many opinions floating around about what the right response is from the church. Criticisms are being waged against bishops, arguments are breaking out on social media, and people are frustrated—the general feeling of uneasiness and anxiety is manifesting in very negative ways."
              event="Faith in a Time of Chaos"
              cta="Read More"
            />
            <Appearance
              href="https://blog.equinix.com/blog/2021/04/06/pushing-to-the-edge-with-hybrid-cloud/"
              title="Pushing to the Edge with Hybrid Cloud"
              description="How to build and connect digital infrastructure with hybrid multicloud at the edge."
              event="Equinix.com"
              cta="read More"
            />
            <Appearance
              href="https://www.serverless.com/blog/keeping-culture-remote-culture"
              title="Keeping the Culture in Remore Culture"
              description="Maintaining a company culture when everyone is co-located is hard. Doing it remotely is even harder. But it's far from impossible. As someone who's been working on remote teams for the past several years, first at Compose and now at Serverless, here are some things I've learned about how to keep remote culture great. Hint: it starts with leadership."
              event="Serverless"
              cta="Read More"
            />
            <Appearance
              href="http://ww1.antiochian.org/fatherhood-kind-asceticism"
              title="Fatherhood, A Kind of Asceticism"
              description="In Christianity, we place a real emphasis on asceticism; it’s an integral part of our faith. When people think of asceticism, the first image to come to mind is that of a monk or nun and their hours of prayer, days of fasting, submission to a spiritual elder. Maybe, if we look at little deeper, we see the asceticism of our parish priest, others in our communities, perhaps within our homes; those who keep vigils, feasts, fasts, who pray the hours, study the scriptures. I don’t mean to downplay those men and women of faith, but, in the last year, I’ve learned about a whole new kind of asceticism in fatherhood."
              event="Antiochian.org"
              cta="Read More"
            />
            <Appearance
              href="https://medium.com/writing-cooperative/stay-the-course-in-2018-301b8f91885a"
              title="Stay the Course in 2018"
              description="Get started early to keep your writing resolutions going strong throughout the new year."
              event="The Writing Cooperative"
              cta="Read More"
            />
            <Appearance
              href="https://medium.com/bello-collective/bringing-christmas-entertainment-into-the-21st-century-b5dd97acd067"
              title="Bringing Christmas Entertainment into the 21st Century"
              description="Christmas entertainment has moved into the 21st century, coming straight to your phones as podcasts. As podcasts continue their steady increase in popularity, Christmas podcasts are coming into their own. You won’t typically find happy carolers or feel-good stories of families coming together, but instead, you’ll learn something new about things you love."
              event="Bello Creative"
              cta="Read More"
            />
            <Appearance
              href="http://ww1.antiochian.org/sites/default/files/january_2016_word_revised_01-02-16.pdf"
              title="Keeping Christ in Christmas: A Few Thoughts on the International Refugee Crisis"
              description="Watching the news, I saw a list of states that have made an effort to ban refugees from the Middle East. You know what caught my eye about many of these states? They are the ones that have elected offcials who identify themselves as Christians"
              event="The Word, January 2016"
              cta="Read More"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
