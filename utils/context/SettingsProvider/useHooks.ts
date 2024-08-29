'use client'

import { SET_LOCALE } from "@/gql/authSchemes";
import { ExchangeRatesDatum, Mutation, Query } from "@/gql/generated/graphql";
import { GET_LATEST_EXCHANGE_RATE } from "@/gql/paymentSchemes";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

type GetLatestRateResult = {
  latestExchangeRatesData: Query['latestExchangeRatesData'];
};

const useGetExchangeRate = () => {
  const [getExchangeRate, { data, loading, error }] = useLazyQuery<GetLatestRateResult>(GET_LATEST_EXCHANGE_RATE, {
    nextFetchPolicy: 'cache-and-network',
  })

  const [exchangeRate, setExchangeRate] = useState<ExchangeRatesDatum | null>(null)

  useEffect(() => {
    getExchangeRate();
    // should be fetch once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.latestExchangeRatesData) {
      setExchangeRate(data.latestExchangeRatesData)
    }
  }, [data])

  return {
    getExchangeRate,
    data: exchangeRate,
    loading: loading,
    error: error,
  }
}

interface SetLocaleMutationResult {
  user: Mutation['setLocale'];
}

const useSetLocaleOnBE = () => {
  const [setLocaleOnBE, { data, loading, error }] = useMutation<SetLocaleMutationResult>(SET_LOCALE, {
    fetchPolicy: 'network-only',
  })

  return {
    setLocaleOnBE,
    data,
    loading,
    error,
  }
}

export {
  useGetExchangeRate,
  useSetLocaleOnBE,
}