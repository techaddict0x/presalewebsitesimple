const token_abi = [{"inputs":[{"internalType":"address payable","name":"_marketingAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"BuyBackEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"RewardLiquidityProviders","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BurnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DisableTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"EnableTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackUpperLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackUpperLimitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setBuyBackEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyBackLimit","type":"uint256"}],"name":"setBuybackUpperLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_marketingAddress","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setMarketingDivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumTokensBeforeSwap","type":"uint256"}],"name":"setNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
const bnb_presale_abi = [{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"contract IST20","name":"_token","type":"address"},{"internalType":"uint256","name":"_max","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"purchaser","type":"address"},{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_weiAmount","type":"uint256"}],"name":"_getTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"uint256","name":"_weiAmount","type":"uint256"}],"name":"_preValidatePurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"forwardFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"maxBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"purchasedBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setPresaleRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IST20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weiMaxPurchaseBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weiRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]

const web3 = new Web3(Web3.givenProvider || 'https://arb1.arbitrum.io/rpc');
const ADDRESS = 'addressSelected';
const LIST_ADDRESS = 'addresses';
const ARBITRUM_MAINNET_ID = 0xa4b1;

$(document).ready(async function () {
  if (typeof web3 !== 'undefined') {
    const ethereum = window.ethereum;

    if (ethereum && ethereum.on) {
      window.chainid = await web3.eth.getChainId();

      ethereum.on('chainChanged', async function (networkId) {
        await setupConnected();
        localStorage.clear();
        
        if (networkId !== ARBITRUM_MAINNET_ID) {
          toastr.warning('Please switch to Arbitrum Mainnet');
        }

        var connect = await ethereum.request({ method: 'eth_accounts' });
        if (connect.length == 0) {
          ethereum.enable().then(
            value => {
              localStorage.setItem(ADDRESS, value[0]);
              localStorage.setItem(LIST_ADDRESS, JSON.stringify(value));
              setupConnected();
            }
          );
        } else {
          localStorage.setItem(ADDRESS, connect[0]);
          localStorage.setItem(LIST_ADDRESS, JSON.stringify(connect));
          setupConnected();
        }
      });
    }

	async function setupConnected(first = null) {
		const targetNetwork = 'arbitrum'; 
		const targetChainId = '0xa4b1'; 
		const targetRpcUrl = 'https://arb1.arbitrum.io/rpc'; 
		const targetExplorerUrl = 'https://arbiscan.io';
	  
		
		const chainId = await ethereum.request({ method: 'eth_chainId' });
		const currentNetwork = getNetworkName(chainId);
	  
		
		if (currentNetwork === targetNetwork || (currentNetwork === 'unknown' && chainId === targetChainId)) {
		  
		  const provider = new Web3.providers.HttpProvider(targetRpcUrl);
		  window.web3 = new Web3(provider);
	  
		  window.contract_token = await new web3.eth.Contract(token_abi, token_contract);
		  window.bnb_contract = await new web3.eth.Contract(bnb_presale_abi, bnb_presale);
	  
		  window.decimals = await contract_token.methods.decimals().call();
		  window.accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		  window.account = accounts[0];
		  await tokenRate();
	  
		  var balance = await web3.eth.getBalance(bnb_presale);
		  balance = balance / Math.pow(10, 18);
	  
		  var per = Math.ceil((balance / total) * 100);
	  
		  $('.progress-bar').css('width', per + '%');
	  
		  if (localStorage.getItem(ADDRESS) != null && localStorage.getItem(ADDRESS).length > 0) {
			web3.eth.defaultAccount = localStorage.getItem(ADDRESS);
			$('.connectToNetwork').remove();
			$('.connectWallet').html('<button class="button accent-green connected logout ml-2">' + shortText(localStorage.getItem(ADDRESS)) + '</button>');
			var currentAccount = localStorage.getItem(ADDRESS);
	  
			$('#author-code').text(currentAccount);
			$('#bnbAddress').text(currentAccount);
			$('.view-link').attr('href', targetExplorerUrl + '/address/' + currentAccount);
		  }
		} else {
		  
		  localStorage.clear();
		  closeApp();
		  if (first !== true) {
			toastr.error('Connect to the Arbitrum One network');
		  } else {
			
			try {
			  await ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [
				  {
					chainId: targetChainId,
					chainName: targetNetwork,
					nativeCurrency: {
					  name: 'Ether',
					  symbol: 'ETH',
					  decimals: 18
					},
					rpcUrls: [targetRpcUrl],
					blockExplorerUrls: [targetExplorerUrl]
				  }
				]
			  });
			  toastr.success('Arbitrum One network added to MetaMask');
			  
			  location.reload();
			} catch (error) {
			  console.error(error);
			  toastr.error('Failed to add Arbitrum One network to MetaMask');
			}
		  }
		}
	  }
	  
	  
	  function getNetworkName(chainId) {
		switch (chainId) {
				case '0x1':
				return 'ethereum';
				case '0xa4b1':
				return 'arbitrum';
				case '0xa4b1':
				return 'arbitrum'; 
				default:
				return 'unknown';
				}
				}
				
				await setupConnected(true);	  
	  
		$('#btn-reset').on('click', function() {
			$('#token_qty').val('')
			$('#token_usd').text('')
			$('#bnbAddress').val('')
			$('.totla_usd').text(0)
			$('.num_token').text(0)
		});


		$('#buy-again-btn').on('click', function() {
			$('#token_qty').val('')
			$('#token_usd').text('')
			$('#bnbAddress').val('')
			$('.totla_usd').text(0)
			$('.num_token').text(0)
			$('.vector-section').addClass('d-none');
			$('.step').removeClass('d-none');
			$('.step-1').removeClass('d-none');
			$('.step-2').addClass('d-none');
			$('.step-indicator.side-step-3').removeClass('is-active');
			$('.step-indicator.side-step-1').addClass('is-active');
			$('.footer-2').addClass('d-none');
		});



		ethereum.on('accountsChanged', async function (accounts) {
	    	localStorage.clear()
	        
	        var connect = await ethereum.request({ method: 'eth_accounts' });
	        if(connect.length == 0){
	            ethereum.enable().then(
	                value => {
	                    localStorage.setItem(ADDRESS, value[0])
	                    localStorage.setItem(LIST_ADDRESS, JSON.stringify(value))
	                    setupConnected()
	                }
	            )
	        }
	        else{
	            localStorage.setItem(ADDRESS, connect[0])
	            localStorage.setItem(LIST_ADDRESS, JSON.stringify(connect))
	            setupConnected()

	            
	        }
	    });


	    $(document).on('click', '.connectToNetwork', async  function(){
	        localStorage.clear()
	        
	        var connect = await ethereum.request({ method: 'eth_accounts' });
	        if(connect.length == 0){
	            ethereum.enable().then(
	                value => {
	                    localStorage.setItem(ADDRESS, value[0])
	                    localStorage.setItem(LIST_ADDRESS, JSON.stringify(value))
	                    setupConnected()
	                }
	            )
	        }
	        else{
	            localStorage.setItem(ADDRESS, connect[0])
	            localStorage.setItem(LIST_ADDRESS, JSON.stringify(connect))
	            setupConnected()
	            
	        }
	    });


	    $(document).on('click', '.logout', async  function(){
	        localStorage.clear()
	        closeApp();
	    });

	    
	
	$('input[id=bnb_value]').on('input',async function(){
			var network_id = await web3.eth.net.getId();
			if(network_id == network){
				var currency = $('#currency').val();
				if(typeof currency !== 'undefined'){
					if(currency == 1){
						$('.btn-approve-busd').remove();
						$('.bnb_message').text('');
						
						let value = $(this).val();
						value =  parseFloat(value.replace(/,/g, ''));

						if(value < 0 || value == ''){
							$('#token_qty').text(0);
							$('.num_token').text(0);
							$('.total_usd').text(0);
							$('.bnb_message').text('Amount should be greater than 0 !');
						}
						else if(isNaN(value)){
							$('#token_qty').text(0);
							$('.num_token').text(0);
							$('.total_usd').text(0);
							$('.bnb_message').text('Enter valid Amount!');
						}
						else if(value < min_buy){
							$('#token_qty').text(0);
							$('.num_token').text(0);
							$('.total_usd').text(0);
							$('.bnb_message').text('Amount should be greater than '+min_buy+' !');
						}
						else{
							let weiMaxPurchaseBnb = await bnb_contract.methods.weiMaxPurchaseBnb().call();
							weiMaxPurchaseBnb = weiMaxPurchaseBnb/Math.pow(10,18);
							let rate = await bnb_contract.methods.rate().call();
							rate = rate / Math.pow(10,18);
							
							if(parseFloat(weiMaxPurchaseBnb) >=  value){
								
								if(rate){
									$('#token_qty').text((parseFloat(value) * parseFloat(rate)).toFixed(3));
									$('.num_token').text(parseFloat((parseFloat(value) * parseFloat(rate)).toFixed(3)));

									var total_usd = (parseFloat(value) * parseFloat(bnb_usd)).toFixed(3)
									$('.total_usd').text(total_usd);
								}
							}
							else{
								// $(this).val(weiMaxPurchaseBnb);
								// $('#token_qty').text(parseFloat(weiMaxPurchaseBnb) * parseFloat(rate));
								$('.bnb_message').text('Amount should be less than '+weiMaxPurchaseBnb + ' BNB !');
							}
						}
					}
				}
				else{
					$('.bnb_message').text('please select Cryptocurrency!');
				}
			}
			else{
				$('.bnb_message').text(net_err);
			}
		});


		$('#buy-btn').on('click', async function() {
			
			var bnb_value = $('#bnb_value').val();
			var checkBnb = $.isNumeric(bnb_value);  
			var error = 0;
			if(bnb_value == 0 || bnb_value =='' || bnb_value == undefined) {
				$('#bnb_message').html("Please enter valid amount!")
				error += 1;
			}
			else if(checkBnb == false) {
				$('#bnb_message').html("Please enter valid amount!")
				error += 1;
			} else {
				$('#bnb_message').html("")
			} 

			var bnbAddress = $('#bnbAddress').text();
			var checkAddress = await web3.utils.isAddress(bnbAddress);
			
			if(bnbAddress == '' || bnbAddress == undefined){
				$('#error-address').html("Please Connect To Wallet!");
				error += 1;
			}
			else if (checkAddress == false ) {
				$('#error-address').html("Please enter valid BNB address!");
				error += 1;
			} else { 
				$('#error-address').html(''); 
			}

			if (error == 0) {
				let rate = await bnb_contract.methods.rate().call();
				rate = rate / Math.pow(10,18);
				var bnb_value = parseFloat(bnb_value);
				var con_fees = parseFloat(fees);
				var total_pay = (bnb_value + con_fees).toFixed(8);
				
				$('.address').html(bnbAddress);
				$('.step-1').addClass('d-none');
				$('.step-2').removeClass('d-none');
				$('.step-indicator.side-step-1').removeClass('is-active');
				$('.step-indicator.side-step-2').addClass('is-active');
				$('.num_token').html(parseFloat((parseFloat(bnb_value) * parseFloat(rate)).toFixed(5)));
				$('.bnb_price').html(parseFloat(bnb_value).toFixed(8));
				$('.con_fees').html(con_fees.toFixed(8));
				$('.total_payable').html(total_pay);
				return true;
			} 
			else {
				return false;
				$('.loader').css('display','none');
			}

		});

		$(document).on('click', '#confirm-btn', async function() {
			if(localStorage.getItem(ADDRESS) != null && localStorage.getItem(ADDRESS).length > 0){
				var currentAccount = localStorage.getItem(ADDRESS)
				if(currentAccount.toLowerCase() === account.toLowerCase()){
					$('.bnb_message').text('');
					$('.loader').css('display','inline-block');
					$('#confirm-btn').prop('disabled',true);
					$('#back-btn').prop('disabled',true);
					var network_id = await web3.eth.net.getId();
					if(network_id == network){
						var currency = $('#currency').val();
						if(typeof currency !== 'undefined'){
							if(currency == 1){
								var bnb_value = $('#bnb_value').val();
								var total_pay = (parseFloat(bnb_value) + parseFloat(fees)).toFixed(8);
								var max_qty = await bnb_contract.methods.weiMaxPurchaseBnb().call();
								max_qty = max_qty/Math.pow(10,18);
								var rate_qty = await bnb_contract.methods.rate().call();
								rate_qty = rate_qty*Math.pow(10,18);
								bnb_value = parseFloat(bnb_value);
								if(bnb_value < min_buy)
								{
									$('#token_qty').val(0);
									$('.bnb_message').text('Amount should be greater than '+min_buy+' !');
									$('.loader').css('display','none');
									return false;
								}
								else if(bnb_value > max_qty){
									$('input[id=bnb_value]').val(max_qty);
									$('#token_qty').val(parseFloat(max_qty) * parseFloat(rate_qty));
									$('.bnb_message').text('Amount should be greater than '+min_buy+' !');
									$('.loader').css('display','none');
									return false;
								}
								else{
									try{
										var value  = web3.utils.toBN(total_pay * Math.pow(10,18));
										await bnb_contract.methods.buyTokens(account).send({ 'value' : value, 'from' : account},function(err,result){
											if(result){
												var interval = setInterval(async function(){ 
					       							var receipt =  await web3.eth.getTransactionReceipt(result);
												
													if(receipt != null ){
									           			clearInterval(interval)
														if(receipt.status == true){
															
															$('.Transaction-Failed').css('display','none');
															$('.loader').css('display','none');
															
															
														}
														else if(receipt.status == false){
															
															$('.Transaction-Success').css('display','none');
															$('.loader').css('display','none');
															
															
														}
														else {
														
															$('.Transaction-Success').css('display','none');
															$('.loader').css('display','none');
															
															
														}
													} 
												},5000);
											}
										});
									}
									catch(err){
										toastr.error(err.message);
										$('.Transaction-Success').css('display','none');
										$('.loader').css('display','none');
										$('#confirm-btn').prop('disabled',false);
										$('#back-btn').prop('disabled',false);
									}
									$('.step').addClass('d-none');
									$('.vector-section').removeClass('d-none');
									$('.footer-2').removeClass('d-none');
									$('.step-indicator.side-step-2').removeClass('is-active');
									$('.step-indicator.side-step-3').addClass('is-active');
								}
							}
							else{
								toastr.error('Something Went Wrong !')
								$('.loader').css('display','none');
								$('#confirm-btn').prop('disabled',false);
								$('#back-btn').prop('disabled',false);
								return false;
							}
						}
						else{
							$('.bnb_message').text('Select Choose Crypto !');
							$('.loader').css('display','none');
							$('#confirm-btn').prop('disabled',false);
							$('#back-btn').prop('disabled',false);
							return false;
						}
					}
					else{
						$('.bnb_message').text(net_err);
						$('.loader').css('display','none');
						$('#confirm-btn').prop('disabled',false);
						$('#back-btn').prop('disabled',false);
						return false;
					}
					
				}
				else{
					$('.loader').css('display','none');
					toastr.error('Different Account Found !');
				}
			}
			else{
				$('.loader').css('display','none');
				toastr.error('Connect to Wallet!');
			}


		});

		$('#payment').on('change',function(){
			var payment = $(this).val();
			
			if(payment == 1){
				$('.currency-type').text('Metamask');

			}else{
				$('.currency-type').text('Trustwallet');
			}
		});

		$('#btn-reset').on('click', function() {
			$('#bnb_value').val('0');
			$('#token_qty').text('0');
			$('#bnbAddress').val('');
			$('.total_usd').text(0);
			$('.num_token').text(0);
		  });
	  
		  // Button click event for '#buy-again-btn'
		  $('#buy-again-btn').on('click', function() {
			$('#bnb_value').val('0');
			$('#token_qty').text('0');
			$('#bnbAddress').val('');
			$('.total_usd').text(0);
			$('.num_token').text(0);
	  
			$('.vector-section').addClass('d-none');
			$('.step').removeClass('d-none');
			$('.step-1').removeClass('d-none');
			$('.step-2').addClass('d-none');
			$('.step-indicator.side-step-3').removeClass('is-active');
			$('.step-indicator.side-step-1').addClass('is-active');
			$('.footer-2').addClass('d-none');
		  });
		} else {
		  $('.bnb_message').text('install Metamask!');
		}
	  });



function closeApp()
{
	$('.connected').remove();
	$('.connectWallet').html('<button class="button accent-green ml-2 connectToNetwork">Connect Wallet</button>')
	$('#modalopen').modal('hide');
	$('.user_balance').text('0 BNB');

}


function checkForConnection(){
    if(localStorage.getItem(ADDRESS) != null && isChainError != null && !isChainError){
        // saveLOG(localStorage.getItem(ADDRESS))
        return 0;
    }
}


function shortText(str){
    return str.substr(0,5)+"...."+str.substr(-5)
}


async function chainId(){
	window.chainid =await web3.eth.getChainId();
	return true;
}


function CopyToClipboard(id)
{
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	var div = document.getElementById("message");
	div.style.display = "block";
  	setTimeout(function(){div.style.display = "none";}, 3000);

}

async function tokenRate() {
	try {
	  
	  let rate = await bnb_contract.methods.rate().call();
	  rate = rate / Math.pow(10, 18);
  
	  
	  var bnb_rate_token = parseFloat(1 / rate);
	  var usd_rate_token = (bnb_rate_token * parseFloat(bnb_usd)).toFixed(5);
	  $('.token_rate').text(usd_rate_token);
	} catch (error) {
	  console.log(error);
	}
  }