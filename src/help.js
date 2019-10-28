var help = {
    list: 
    `== Blockchain ==<br>
    getbestblockhash<br>
    getblock "hash" ( verbose )<br>
    getblockchaininfo<br>
    getblockcount<br>
    getblockhash index<br>
    getblockheader "hash" ( verbose )<br>
    getchaintips<br>
    getdifficulty<br>
    getmempoolinfo<br>
    getrawmempool ( verbose )<br>
    gettxout "txid" n ( includemempool )<br>
    gettxoutsetinfo<br>
    verifychain ( checklevel numblocks )<br><br>

    == Control ==<br>
    getinfo<br>
    help ( "command" )<br>
    stop<br><br>

    == Generating ==<br>
    getgenerate<br>
    gethashespersec<br>
    setgenerate generate ( genproclimit )<br><br>

    == Lyra ==<br>
    masternode "command"... ( "passphrase" )<br>
    masternodelist ( "filter" )<br>
    mnbudget "command"... ( "passphrase" )<br>
    mnbudgetvoteraw <masternode-tx-hash> <masternode-tx-index> <proposal-hash> <yes|no> <time> <vote-sig><br>
    mnfinalbudget "command"... ( "passphrase" )<br>
    mnsync [status|reset]<br>
    obfuscation <lyraaddress> <amount><br>
    spork <name> [<value>]<br><br>

    == Mining ==<br>
    getblocktemplate ( "jsonrequestobject" )<br>
    getmininginfo<br>
    getnetworkhashps ( blocks height )<br>
    prioritisetransaction <txid> <priority delta> <fee delta><br>
    reservebalance [<reserve> [amount]]<br>
    submitblock "hexdata" ( "jsonparametersobject" )<br><br>

    == Network ==<br>
    addnode "node" "add|remove|onetry"<br>
    getaddednodeinfo dns ( "node" )<br>
    getconnectioncount<br>
    getnettotals<br>
    getnetworkinfo<br>
    getpeerinfo<br>
    ping<br><br>

    == Rawtransactions ==<br>
    createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}<br>
    decoderawtransaction "hexstring"<br>
    decodescript "hex"<br>
    getrawtransaction "txid" ( verbose )<br>
    sendrawtransaction "hexstring" ( allowhighfees )<br>
    signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )<br><br>

    == Util ==<br>
    createmultisig nrequired ["key",...]<br>
    estimatefee nblocks<br>
    estimatepriority nblocks<br>
    validateaddress "lyraaddress"<br>
    verifymessage "lyraaddress" "signature" "message"<br><br>

    == Wallet ==<br>
    addmultisigaddress nrequired ["key",...] ( "account" )<br>
    autocombinerewards <true/false> threshold<br>
    backupwallet "destination"<br>
    bip38decrypt "lyraaddress"<br>
    bip38encrypt "lyraaddress"<br>
    dumpprivkey "lyraaddress"<br>
    dumpwallet "filename"<br>
    encryptwallet "passphrase"<br>
    getaccount "lyraaddress"<br>
    getaccountaddress "account"<br>
    getaddressesbyaccount "account"<br>
    getbalance ( "account" minconf includeWatchonly )<br>
    getnewaddress ( "account" )<br>
    getrawchangeaddress<br>
    getreceivedbyaccount "account" ( minconf )<br>
    getreceivedbyaddress "lyraaddress" ( minconf )<br>
    getstakesplitthreshold<br>
    getstakingstatus<br>
    gettransaction "txid" ( includeWatchonly )<br>
    getunconfirmedbalance<br>
    getwalletinfo<br>
    importaddress "address" ( "label" rescan )<br>
    importprivkey "lyraprivkey" ( "label" rescan )<br>
    importwallet "filename"<br>
    keypoolrefill ( newsize )<br>
    listaccounts ( minconf includeWatchonly)<br>
    listaddressgroupings<br>
    listlockunspent<br>
    listreceivedbyaccount ( minconf includeempty includeWatchonly)<br>
    listreceivedbyaddress ( minconf includeempty includeWatchonly)<br>
    listsinceblock ( "blockhash" target-confirmations includeWatchonly)<br>
    listtransactions ( "account" count from includeWatchonly)<br>
    listunspent ( minconf maxconf  ["address",...] )<br>
    lockunspent unlock [{"txid":"txid","vout":n},...]<br>
    move "fromaccount" "toaccount" amount ( minconf "comment" )<br>
    multisend <command><br>
    sendfrom "fromaccount" "tolyraaddress" amount ( minconf "comment" "comment-to" )<br>
    sendmany "fromaccount" {"address":amount,...} ( minconf "comment" )<br>
    sendtoaddress "lyraaddress" amount ( "comment" "comment-to" )<br>
    sendtoaddressix "lyraaddress" amount ( "comment" "comment-to" )<br>
    setaccount "lyraaddress" "account"<br>
    setstakesplitthreshold <1 - 999,999><br>
    settxfee amount<br>
    signmessage "lyraaddress" "message"`
}

export default help