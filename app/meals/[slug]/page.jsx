import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { Suspense } from 'react';
import MealsLoadingPage from '@/components/loading/loading-out';
import { notFound } from 'next/navigation';

async function Meal({ slug }) {
  const meal = await getMeal(slug)

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>BY <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}></p>
      </main>
    </>
  )
}

export default async function MealsSlug({ params }) {
  return (
    <Suspense fallback={<MealsLoadingPage content={"meal"}/>}>
      <Meal slug={params.slug}/>
    </Suspense>
  )
}