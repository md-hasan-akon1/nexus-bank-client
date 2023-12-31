import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import OpenAccount from "../Pages/UserDashboard/OpenAccount/OpenAccount";
import MyProfile from "../Pages/UserDashboard/ProfileManage/MyProfile/MyProfile";
import ApplyLoan from "../Pages/UserDashboard/ApplyLoan/ApplyLoan";
import Contact from "../Pages/Contact/Contact";
import TransactionHistory from "../Pages/UserDashboard/TransactionHistory/TransactionHistory";
import AddMoney from "../Pages/UserDashboard/AddMoney/AddMoney";
import Dashboard from "../Layouts/Dashboard";
import AdminDashboard from "../Pages/AdminDashboard/Dashboard/AdminDashboard";
import Employees from "../Pages/AdminDashboard/Employees/Employees";
import Users from "../Pages/AdminDashboard/Users/Users";
import Analytics from "../Pages/AdminDashboard/Analytics/Analytics";
import SavingAccountForm from "../Pages/UserDashboard/OpenAccount/Accounts/SavingAccount/SavingAccountForm";
import AboutDetails from "../Pages/Home/About/AboutDetails/AboutDetails";
import BlogPage from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChatUs from "../Pages/Chat/ChatUs";
import PrivetRout from "./PrivetRout";
import EditProfile from "../Pages/UserDashboard/ProfileManage/EditProfile/EditProfile";
import TransferMoney from "../Pages/UserDashboard/TransferMoney/TransferMoney";
import { baseUrl } from "../config/server";
import AccountRequest from "../Pages/AdminDashboard/Account-Request/AccountRequest";
import Accounts from "../Pages/AdminDashboard/Accounts/Accounts";
import LoanRequest from "../Pages/AdminDashboard/LoanRequest/LoanRequest";
import Feedback from "../Pages/AdminDashboard/LoanRequest/Feedback";
import UserProfile from "../Pages/AdminDashboard/Users/UserProfile";
import CreditCardApply from "../Pages/UserDashboard/CreditCardApply/CreditCardApply";
import Careers from "../Pages/Careers/Careers";
import FundTransfer from "../Pages/UserDashboard/FundTransfer/FundTransfer/FundTransfer";
import CardBeneficiaryList from "../Pages/UserDashboard/CardServices/CardBeneficiaryList/CardBeneficiaryList";
import MobilTopUpHistory from "../Pages/UserDashboard/TopUp/MobilTopUpHistory/MobilTopUpHistory";
import EStatement from "../Pages/UserDashboard/E-statement/EStatement";
import PaymentPinVerification from "../Pages/UserDashboard/CardServices/PaymentPinVerification/PaymentPinVerification";
import AccountOverview from "../Pages/UserDashboard/AccountOverview/AccountOverview";
import PasswordChange from "../Pages/UserDashboard/ProfileManage/PasswordChange/PasswordChange";
import CurrentAccount from "../Pages/UserDashboard/OpenAccount/Accounts/CurrentAccount/CurrentAccount";
import StudentAccount from "../Pages/UserDashboard/OpenAccount/Accounts/StudentAccount/StudentAccount";
import AdminDashboardLayout from "../Layouts/AdminDashboardLayout";
import TopUpBeneficiaryList from "../Pages/UserDashboard/TopUp/TopUpBeneficiaryList/TopUpBeneficiaryList";
import FundTransferPin from "../Pages/UserDashboard/FundTransfer/FundTransferPin/FundTransferPin";
import AddLatestNews from "../Pages/AdminDashboard/AddLatestNews/AddLatestNews";
import AddBeneficiary from "../Pages/UserDashboard/AddBeneficiary/AddBeneficiary";
import MyAccounts from "../Pages/UserDashboard/MyAccounts/MyAccounts";
import BkashFundTransfer from "../Pages/UserDashboard/BkashTransfer/BkashFundTransfer/BkashFundTransfer";
import PaymentSuccessful from "../Pages/UserDashboard/CardServices/PaymentPinVerification/PaymentSuccessful";
import DepositAccount from "../Pages/UserDashboard/OpenAccount/Accounts/DepositAccount/DepositAccount";
import CustomerService from "../Pages/CustomerService/CustomerService";
import CustomerSupport from "../Pages/AdminDashboard/CustomerSupport/CustomerSupport";
import PaymentStatusPage from "../Pages/UserDashboard/BkashTransfer/PaymentStatus/PaymentStatusPage";
import AdminLogin from "../Pages/AdminDashboard/AdminLogin/AdminLogin";
import AdminSecureRoute from "./AdminSecureRoute";
import AllNews from "../Pages/AdminDashboard/AllNews/AllNews";
import BlogDetail from "../Pages/Blog/BlogDetail";
import AddCardBeneficiary from "../Pages/UserDashboard/AddCardBeneficiary/AddCardBeneficiary";
import AccountBeneficiaryList from "../Pages/UserDashboard/FundTransfer/FundTransferBeneficiary/AccountBeneficiaryList";
import UpdateNews from "../Pages/AdminDashboard/UpdateNews/UpdateNews";
import JobApply from "../Pages/UserDashboard/JobApply/JobApply";
import Loan from "../Pages/Loan/Loan";
import StudentLoan from "../Pages/Loan/LoanDetails/StudentLoan/StudentLoan";
import BusinessLoan from "../Pages/Loan/LoanDetails/BusinessLoan/BusinessLoan";
import PersonalLoan from "../Pages/Loan/LoanDetails/PersonalLoan/PersonalLoan";
import AdminPasswordChange from "../Pages/AdminDashboard/AdminPasswordChange/AdminPasswordChange";
import AccountsDetails from "../Pages/AccountsDetails/AccountsDetails";
import SslCommerzPayment from "../Pages/UserDashboard/SslCommerzPayment/SslCommerzPayment";
import CreditCardRequests from "../Pages/AdminDashboard/CreditCardRequests/CreditCardRequests";
import UserSecureRoute from "./UserSecureRoute";
import AddACareer from "../Pages/AdminDashboard/AddACareer/AddACareer";
import ManageAllCareers from "../Pages/AdminDashboard/ManageAllCareers/ManageAllCareers";
import StripeTermsAndConditions from "../Pages/Shared/StripeTermsAndCondition/StripeTermsAndCondition";
import UserReview from "../Pages/UserDashboard/ProfileManage/UserReview/UserReview";
import AddBanner from "../Pages/AdminDashboard/AddBanner/AddBanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${baseUrl}/get-banner`),
      },
      {
        path: "/chat",
        element: (
          <PrivetRout>
            <ChatUs></ChatUs>
          </PrivetRout>
        ),
      },
      {
        path: "about-details",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "retail-loan",
        element: <Loan></Loan>,
      },
      {
        path: "student-loan",
        element: <StudentLoan></StudentLoan>,
      },
      {
        path: "nexus-accounts",
        element: <AccountsDetails></AccountsDetails>,
      },
      {
        path: "personal-loan",
        element: <PersonalLoan></PersonalLoan>,
      },
      {
        path: "business-loan",
        element: <BusinessLoan></BusinessLoan>,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
      {
        path: "blogs/detail/:id",
        element: <BlogDetail />,
      },
      {
        path: "careers",
        element: <Careers />,
        loader: () => fetch(`${baseUrl}/careers`),
      },
      {
        path: "customer-service",
        element: <CustomerSupport />,
      },
      {
        path: "customer",
        element: <CustomerService />,
      },
      {
        path: "stripe-terms-and-conditions",
        element: <StripeTermsAndConditions />,
      },
      {
        path: "nexus-customer-service-portal",
        element: <CustomerService />,
      },
      {
        path: `apply/:id`,
        element: <JobApply />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <UserSecureRoute>
        <Dashboard />
      </UserSecureRoute>
    ),
    children: [
      // ..........User dashboard routes............
      {
        path: "account-overview",
        element: <AccountOverview />,
      },
      {
        path: "apply-loan",
        element: <ApplyLoan />,
      },
      {
        path: "Fund-transfer",
        element: <FundTransfer />,
      },
      {
        path: "fund-transfer-pin-verification",
        element: <FundTransferPin />,
      },
      {
        path: "topup-beneficiary-list",
        element: <TopUpBeneficiaryList />,
      },
      {
        path: "card-beneficiary-list",
        element: <CardBeneficiaryList />,
      },
      {
        path: "card-beneficiary-list/add-card-beneficiary",
        element: <AddCardBeneficiary />,
      },
      {
        path: "FundTransferBeneficiaryList",
        element: <AccountBeneficiaryList />,
      },
      {
        path: "MobilTopUpHistory",
        element: <MobilTopUpHistory />,
      },
      {
        path: "FundTransferBeneficiaryList/AddBeneficiary",
        element: <AddBeneficiary />,
      },
      {
        path: "add-money",
        element: <AddMoney />,
      },
      {
        path: "transfer-money",
        element: <TransferMoney />,
      },
      {
        path: "saving-account",
        element: <SavingAccountForm />,
      },

      // {
      //   path: "checkout",
      //   element: <StripePayment />,
      // },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      },
      {
        path: "e-statement",
        element: (
          <UserSecureRoute>
            <EStatement />
          </UserSecureRoute>
        ),
      },
      {
        path: "sslcommerz-fund-transfer",
        element: <SslCommerzPayment />,
      },
      {
        path: "verify-pin",
        element: <PaymentPinVerification />,
      },
      {
        path: "payment-successfull",
        element: <PaymentSuccessful />,
      },
      {
        path: "credit-card-apply",
        element: (
          <UserSecureRoute>
            <CreditCardApply />
          </UserSecureRoute>
        ),
      },

      {
        path: "my-accounts",
        element: (
          <UserSecureRoute>
            <MyAccounts />
          </UserSecureRoute>
        ),
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "change-password",
        element: <PasswordChange />,
      },
      {
        path: "user-feedback",
        element: <UserReview />,
      },
    ],
  },
  // admin dashboard
  {
    path: "/admin",
    element: (
      <AdminSecureRoute>
        <AdminDashboardLayout />
      </AdminSecureRoute>
    ),
    children: [
      // ..................admin dashboard routes........................
      {
        path: "adminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "users",
        element: (
          <AdminSecureRoute>
            <Users />
          </AdminSecureRoute>
        ),
        loader: () => fetch(`${baseUrl}/users`),
      },
      {
        path: "users/:email",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "account-request",
        element: <AccountRequest />,
      },
      {
        path: "credit-card-requests",
        element: <CreditCardRequests />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "AddLatestNews",
        element: (
          <AdminSecureRoute>
            <AddLatestNews />
          </AdminSecureRoute>
        ),
      },
      {
        path: "AllNews",
        element: (
          <AdminSecureRoute>
            <AllNews />
          </AdminSecureRoute>
        ),
      },
      {
        path: "AllNews/update/:id",
        element: (
          <AdminSecureRoute>
            <UpdateNews />
          </AdminSecureRoute>
        ),
        loader: (params) => fetch(`${baseUrl}/AllNews/update/${params.id}`),
      },
      {
        path: "loan-request",
        element: <LoanRequest />,
        loader: () => fetch(`${baseUrl}/loans`),
      },
      {
        path: "addacareer",
        element: (
          <AdminSecureRoute>
            <AddACareer />,
          </AdminSecureRoute>
        ),
      },
      {
        path: "manage-careers",
        element: (
          <AdminSecureRoute>
            <ManageAllCareers />,
          </AdminSecureRoute>
        ),
        loader: () => fetch(`${baseUrl}/careers`),
      },
      {
        path: "feedback/:id",
        element: <Feedback />,
      },
      {
        path: "customer-support",
        element: <CustomerSupport />,
      },
      {
        path: "change-password",
        element: <AdminPasswordChange />,
      },
      {
        path: "add-banner",
        element: <AddBanner />,
      },
    ],
  },
  // other routes
  {
    path: "/payment-status/:status/:transactionId",
    element: <PaymentStatusPage />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/saving-account",
    element: <OpenAccount />,
  },
  {
    path: "/current-account",
    element: <CurrentAccount />,
  },
  {
    path: "/student-account",
    element: <StudentAccount />,
  },
  {
    path: "/deposit-account",
    element: <DepositAccount />,
  },
]);

export default router;
