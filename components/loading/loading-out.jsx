import classes from './loading.module.css';

export default function MealsLoadingPage({ content }) {
  return (
    <p className={ classes.loading }>Fetching {content}...</p>
  )
}