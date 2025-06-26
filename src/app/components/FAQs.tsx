"use client";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the POTLOCK Cross Chain Donation Widget?",
      answer:
        "It’s a simple, embeddable widget that allows you to accept donations from various blockchain networks directly to your NEAR account, without requiring users to connect their wallets.",
    },
    {
      question: "How do I integrate the widget into my website?",
      answer:
        "Please refer to our integration guide for step-by-step instructions.",
    },
    {
      question: "What blockchain networks does it support?",
      answer:
        "Currently, it supports multiple major networks including NEAR, Ethereum, and more.",
    },
    {
      question: "Are there any fees involved?",
      answer:
        "There are no additional fees beyond standard network transaction costs.",
    },


    {
        question: "Is there a testnet deployment?",
        answer:
          "There's no testnet deployment and no plans for it. We recommend testing on NEAR mainnet with using separate dev/test NEAR accounts.",
      },
      {
        question: "Is there support for native NEAR deposits?",
        answer:
          "Only  ft_transfer_call can be used to deposit NEP-141 tokens from Near to intents.near",
      },
      {
        question: "tx_hash in the recent_deposit response for all SOL deposits is empty",
        answer:
          "This information is not available for Solana because the mechanism of deposit tracking works a bit differently there.",
      },
      {
        question: "Is there a reason why my UTXOs aren't being swept on the BTC ? I sent 5,000 sats",
        answer:
          `The deposit process begins once the transfer transaction on the foreign network has been completed.  When the balance of the user's unique deposit address has become positive our indexer generates a deposit event and assigns it a PENDING status.

          The next step is collecting the current tokens in storage. The result of this process will be either a COMPLETED or FAILED status. Deposits with a FAILED status are currently handled manually and eventually updated to the COMPLETED status.
          
          On EVM networks, deposits can bypass the PENDING status due to the faster processing and transfer completion times.
          
          The data structure for the PENDING and FAILED statuses is identical to that of the COMPLETED status.
          
          Regarding BTC deposits: If you want to make a deposit to an account that hasn’t yet been connected to the application - this is possible but requires extreme caution. You can request a deposit address by calling the bridge API (deposit_address) and specifying the account_id parameter. The account_id can be a NEAR account, an EVM address, or a SOL address to which you have access.
          
          It is recommended starting with a small amount for experimentation. After the deposit is completed, you can connect wallet and check the tokens.`,
      },
      {
        question: "ETH-connector migration",
        answer:
          "Because of the split of ETH-connector, auroracontract now acts as a NEP-141 proxy to eth.bridge.near.",
      },
  ];

  //


  return (
    <div className=" bg-white flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900">
            Frequently asked questions
          </h1>
          <p className="text-gray-600 mt-2">
            Find answers to common questions about the POTLOCK Cross Chain
            Donation Widget.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 text-gray-900 font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center  mt-12 text-gray-500 text-sm">
          <div
            className="flex justify-center text-black items-center mb-2"
            style={{ fontWeight: 550 }}
          >
            🫕 POTLOCK
          </div>
          <p style={{ fontWeight: 550, color: "black" }}>
            The Free, Open Funding Stack.
          </p>
          <p className="mt-1">
            Build open source end to end tools for anyone to create their own
            funding solution.
          </p>
        </div>
      </div>
    </div>
  );
}
