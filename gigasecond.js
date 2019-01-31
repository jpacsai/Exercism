/*
Calculate the moment when someone has lived for 10^9 seconds.

A gigasecond is 10^9 (1,000,000,000) seconds.
*/

export const gigasecond = date => new Date(date.valueOf() + 1000000000000);
