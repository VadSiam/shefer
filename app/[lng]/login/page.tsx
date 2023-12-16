import Login from '@/[lng]/components/Login'
import { IPageProps } from '../page';

interface ILoginPage extends IPageProps {
  searchParams?: { message?: string },
}

const LoginPage = ({
  searchParams,
  params: { lng },
}: ILoginPage) => {
  return (<Login searchParams={searchParams} lng={lng} />)
}

export default LoginPage;