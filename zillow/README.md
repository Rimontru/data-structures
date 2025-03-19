# Zillow Test

## Levels included

[Easy](CodeSignal)

## Scenario

You work at Zillow, where customers can create saved searches that will notify them when new properties are available in the market that match their filters.

Imagine we have a customer with the following saved searches:

/SanFrancisco,CA/1230_2500_sft
/SanFrancisco,CA/1400_1550_sft
/SanFrancisco,CA/1550_sft
/Austin,TX/2000_2500_sft

Now a property with following attributes comes on market:

> propertyId: 123
> sft: 1450
> city: SanFrancisco
> state: CA

Please implement a method to return any saved searches for this customer that matches the property that just came on market. In this example you would return:

> /SanFrancisco,CA/1230_2500_sft, /SanFrancisco,CA/1400_1550_sft

- [execution time limit] 30 seconds

- [memory limit] 1 GB

