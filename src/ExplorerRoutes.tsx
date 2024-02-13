import React from "react";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage/Index";
import NotFoundPage from "./pages/layout/NotFoundPage";
import ExplorerLayout from "./pages/layout";
import TransactionPage from "./pages/Transaction/Index";
import AccountPage from "./pages/Account/Index";
import BlockPage from "./pages/Block/Index";
import TokenPage from "./pages/Token/Index";
import TransactionsPage from "./pages/Transactions/Index";
import BlocksPage from "./pages/Blocks/Index";
import ValidatorsPage from "./pages/Validators/Index";
import AnalyticsPage from "./pages/Analytics/Index";
import FaucetPage from "./pages/Faucet/Index";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ChallengesPage from "./pages/Challenges/Index";
import HomeExplorerPage from "./pages/HomeExplorer/Index";

export default function ExplorerRoutes() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ExplorerLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/validators" element={<ValidatorsPage />}>
              <Route path=":tab" element={<ValidatorsPage />} />
            </Route>
            <Route path="/tx">
              <Route path=":txnHashOrVersion" element={<TransactionPage />} />
              <Route
                path=":txnHashOrVersion/:tab"
                element={<TransactionPage />}
              />
            </Route>

            <Route path="/account">
              <Route
                path=":address/modules/:modulesTab/:selectedModuleName"
                element={<AccountPage />}
              />
              <Route
                path=":address/modules/:modulesTab/:selectedModuleName/:selectedFnName"
                element={<AccountPage />}
              />
              <Route path=":address/:tab" element={<AccountPage />} />
              <Route path=":address" element={<AccountPage />} />
            </Route>

            <Route path="/address">
              <Route
                path=":address/modules/:modulesTab/:selectedModuleName"
                element={<AccountPage />}
              />
              <Route
                path=":address/modules/:modulesTab/:selectedModuleName/:selectedFnName"
                element={<AccountPage />}
              />
              <Route path=":address/:tab" element={<AccountPage />} />
              <Route path=":address" element={<AccountPage />} />
            </Route>

            <Route path="/blocks" element={<BlocksPage />} />
            <Route path="/block">
              <Route path=":height" element={<BlockPage />} />
              <Route path=":height/:tab" element={<BlockPage />} />
            </Route>
            <Route path="/token">
              <Route path=":tokenId/:propertyVersion" element={<TokenPage />} />
              <Route
                path=":tokenId/:propertyVersion/:tab"
                element={<TokenPage />}
              />
            </Route>
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/faucet" element={<FaucetPage />} />
            <Route path="/challenges" element={<ChallengesPage />}>
              <Route path=":tab" element={<ChallengesPage />} />
            </Route>
            <Route path="/explorer" element={<HomeExplorerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ExplorerLayout>
      </QueryClientProvider>
    </div>
  );
}
