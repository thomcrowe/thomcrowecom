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
        <title>Speaking - Thom Crowep</title>
        <meta
          name="description"
          content="I&apos;m available to speak about all things Christmas, Anglo-Christianity, and growth/marketing.."
        />
      </Head>
      <SimpleLayout
        title="In-person and virutal events and podcasts where I've spoken."
        intro="I'm up for speaking on topics ranging from Christmas to Anglo-Christianity, to all things growth and marketing."
      >
        <div className="space-y-20">
          <SpeakingSection title="Where to hear me">
            <Appearance
              href="https://www.rnz.co.nz/national/programmes/afternoons/audio/2018871818/tis-the-podcast-makers-on-christmas-controversies"
              title="'Tis the podcast makers on Christmas controversies!"
              description="December the 25th isn't a date on the calendar, it's a way of life for three super Christmas nerds who jingle their bells year-round. On this episode, they talk through Christmas controversies."
              event="Afternoons with Jessie, Radio New Zeland"
              cta="Listen to the Show"
            />
            <Appearance
              href="https://goodpods.com/podcasts/totally-rad-christmas-121060/batman-and-dc-comics-pt-1-w-thom-crowe-8674434"
              title="Batman and DC Comics pt 1"
              description="Thom Crowe joins Gerry D on Totally Rad Christmas to for the first part in a series all about DC Comics and most especially Batman! &quot;Merry Christmas...and a Deadly New Year!,&quot;&quot;Wanted: Santa Claus--Dead or Alive!&quot;, &quot;The Mystery of Christmas Lost!&quot;, &quot;Who's Afraid of the Big Red S?&quot;, and more!!"
              event="Totally Rad Christmas"
              cta="Listen to the Podcast"
            />
            <Appearance
              href="https://adventcalendar.house/episodes/smurfs-christmas-special-dPS_fbhR"
              title="The Smurfs’ Christmas Special"
              description="It’s Christmas Eve in the Advent Calendar House as we walk through a ring of fire back to 1982 to dance with the Smurfs and watch goodness make the badness go away."
              event="Advent Calendar House"
              cta="Listen to the Podcast"
            />
            <Appearance
              href="https://hop.online/podcasts/developer-marketing-101-with-thom-crowe-director-of-growth-at-vercel/"
              title="Developer Marketing 101 with Thom Crowe"
              description="Meet Thom Crowe, Director of Growth Acquisition at Vercel – a platform for frontend frameworks and static sites. In this episode, Thom gets into the fundamentals of developer marketing, how organic can guide paid acquisition targeting, and responding to need versus creating it"
              event="Hop Online"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://www.crowdcast.io/e/dscconf2021/46"
              title="Driving Successful AI Projects at Scale - What's Needed in Your Industry?"
              description="A panel discussion on how to use AI projects across industries"
              event="Data Science Connection Conference, October 2021"
              cta="Watch the Panel"
            />
            <Appearance
              href="https://techstrong.tv/videos/2019-time-series-data-summit/how-to-use-time-series-data-to-measure-anything"
              title="How to Use Time Series Data to Measure Anything"
              description="In this presentation, Thom Crowe, Community Manager, and Daniella Pontes, Senior Marketing Product Manager at InfluxData, will detail how to use time-series data to measure everything and anything that you are responsible for—from your infrastructure, your apps, and physical things like sensors. Time series data helps you understand the change over time which is fundamental to making things perform optimally."
              event="Techstrong.tv"
              cta="Watch the Episode"
            />
            <Appearance
              href="https://www.podchaser.com/podcasts/the-new-builders-podcast-10984/episodes/ep-41-offline-first-as-a-socia-25876346"
              title="Offline First as a Social Movement"
              description="This week, Teri Chadborne joins to Thom introduce Offline Camp, a gathering of people who come together to focus on developing with an Offline First mentality before jumping into a great discussion."
              event="The New Builders Podcast"
              cta="Listen to the Episode"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
