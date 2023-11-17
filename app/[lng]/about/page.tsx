import { IPageProps } from "../page";

const AboutPage = ({ params: { lng } }: IPageProps) => {
  return (
    <div>
      <h1>About</h1>
      <p>This is an about page</p>
    </div>
  );
}

export default AboutPage;