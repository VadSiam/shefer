import Login from '@/[lng]/components/Login'

const LoginPage = ({
  searchParams,
}: {
  searchParams: { message: string }
}) => {
  return (<Login searchParams={searchParams} />)
}

export default LoginPage;