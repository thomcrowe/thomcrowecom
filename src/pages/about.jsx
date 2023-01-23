import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Thom</title>
        <meta
          name="description"
          content="I’m Thom and I live in Tulsa, Oklahoma with my loving wife, amazing daughter, and our two pups."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                I’m Thom and I live in Tulsa, Oklahoma with my loving wife, 
                amazing daughter, and our two pups.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey there, I'm Thom Crowe. A little about me, I was ordained a deacon 
                in the Orthodox Church before joining the Anglican tradition, work in 
                tech marketing, am a dad to a sweet little girl and husband to a great 
                wife who runs the Made Shop here in Tulsa.

              </p>
              <p>
                I’m an avid reader, beer aficionado, lover of theology and history, and 
                aspiring coffee snob. We have a pretty happy life.
              </p>
              <p>
              Still reading? Well, here are some other random tidbits:</p>
              <ul>
                <li>• My favorite bands are Jimmy Eat World & The Cure </li>
                <li>• I love fantasy books and movies (I’m kinda obsessed with the Lord of the Rings Trilogy, the Wizarding World of Harry Potter and Westeros)</li>
                <li>• If I lived in one of those fantasy worlds, I would be a human (TLOR), live in Ravenclaw (HP), and be a Baratheon (ASOIF)</li>
                <li>• My three favorite books are: The Brothers Karamazov by Fyodor Dostoevsky, Infinite Jest by David Foster Wallace & The Cat’s Cradle by Kurt Vonnegut</li>
                <li>• I’m one of the only people I know who loves Mr. Pibb</li>
                <li>• I have an unhealthy obsession with Christmas</li>
                <li>• I absolutely love to cook</li>
                <li>• I have studied English, Political Science & Theology in college/post-grad</li>
                <li>• I have seen every episode of The Simpsons and Family Guy at least once</li>
                <li>• I can recite most of Monty Python’s Quest for the Holy Grail</li>
                <li>• My favorite dinosaur is the Triceratops</li>
                <li>• I love Middle Eastern and Indian food</li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/thomcrowe" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/thomcrowe" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/thomcrowe" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/thomcrowe" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:thom@thomcrowe.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                thom@thomcrowe.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
