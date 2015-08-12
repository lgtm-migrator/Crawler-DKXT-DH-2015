var unirest = require("unirest");
var Student = require('../model');

var count = 0;
var __EVENTVALIDATION = "/wEdAD+Vae7TNjpqDfW6HXItDoSUNvB3vnHTFERsfYeL9xcmUAQWADBpONyORdox+iPGDB0JkinjVBIOQZyfF0vikDPg3S+0/Y80dunIP0r92gu9E4c90pt76gX3VrICJGs4Ndn/EaDbKn3OGZf3mHm2wZ4vfbLU6R4P4pFX7FnTTDtMjizRCyJk8wlIRhOJnPBePJ8CSZWvB2bHKXsx8RWlwf1LBHsORNH2r8xX+glTefCu3eOCloJZXRzjR+z4jHnEUBr6ye73PftN0mmoIjAYbvAIBrai5iy5dXdeXd7wK50rIR/cneHmd3927XswrW1xFE/MEH05AdG6IbVmx/wyGM0xRVixKFCWOMW3T3BvoB9l+bBD3qghw77JGWrxqYvONVBAqEAflkp2yYnWZ14OdTa41nYcrEemFFIw3BlUrp53dnELkkAug15CDtxyqCNBRhpji0u0AR5FVTKYsP+C5R9njWq9DVDHeM7XwfQiVsnD/jokWxGJTN7JqiZ9hJfeASlNjeAfU9mbrepNnXmvrBGfAmJpUa8Xr2t4pI01f/jB3naTNjZWdRjy9sjqcuxrz4G0PUma/ZEXiOOXsYMi8G/m/IDd4PrSVbXJbgKJmaPlowhCHzpCyzkx7xtr7eCdrVAFSiiTRCVcZDqkP/sKTGskCiMZmfjpjCUtHLfOCXUXVtuz5mN8lhDr8MWxFOuC+5fbC4wjc7mQ9q8xXfNrTYcsnYt2JTfEihgRfJTRd+DSNbg/O7tqyufvMXoo5ZSZ0CpW0ocyjNNa2dzO9LQB0oq5qF/xEv2Y8g63WdHYPvH4/PSknqBPiOjommJy6JVeLgjU5V2n8qxX8+EnYRHyGazP1nnp8rDu1YOGpRTW1yHJAG4OkruT3Ojr/fcnw+ZEQQEdkS4u3yJhVcSKaSBHs5BBYkZXCXQeK4wLf4mec6lDfRQGqxciZlsioO7SCrJ8pVYhd6GbIL1OcxdtH5JCpU7tJLmeb3OO6vZiUZIoYH8oonb7Wo+R75EHkMbNYI7S8U7krxe1ik59q+QLAAai1q9HwfX2Q/hesmLQK5AWKyNiYfxwF8f7Mav+8hkTvSg0t8+47/bsfJGrsmre7yHe+r1HMghB3CM8EVThWZp9CNy3w8rSdL7O14jc7Cr1ZKOID8BGYyWjh8sECLWcI7fEqFFFBElE/2WJNLLleo/YT0UbrROJ3GQ9kKy7MGurg92es32gEeoPmusjQpsyYjIMHVWvjBUs/0DS3RXpY9Y5LGFTlMncCD1FuVGTKWmXJKzRUawlB6rIHOm21R0E/T64f70f8CF6DfzVLRC8XtpLFcHobsau6UCU/lbLXfguROn9zry8uRmmM/DFvXXUYxxXgVl+bQVYNqJsxM2f3rRHR47Dpg=="
var __VIEWSTATE = "/wEPDwUKLTE0OTU5MzM3NA9kFgJmD2QWAgIBD2QWAgIDD2QWAgIBD2QWAmYPZBYCZg9kFgoCAQ8QDxYGHg1EYXRhVGV4dEZpZWxkBQhUZW5OZ2FuaB4ORGF0YVZhbHVlRmllbGQFB01hTmdhbmgeC18hRGF0YUJvdW5kZ2QQFS0hQ04gY2jhur8gdOG6oW8gbcOheSAoQ2FvIMSQ4bqzbmcpM0NOIGvhu7kgdGh14bqtdCDEkWnhu4duLCDEkWnhu4duIHThu60gKENhbyDEkOG6s25nKTtDTiBr4bu5IHRodeG6rXQgxJFp4buHbiB04butLCB0cnV54buBbiB0aMO0bmcgKENhbyDEkOG6s25nKRZTxrAgcGjhuqFtIFRp4bq/bmcgQW5oGVRoaeG6v3Qga+G6vyB0aOG7nWkgdHJhbmcbVGjGsMahbmcgbeG6oWkgxJFp4buHbiB04butCkvhur8gdG/DoW4lS+G6vyB0b8OhbiAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKQ1DTiB0aMO0bmcgdGluKENOIHRow7RuZyB0aW4gKEjhu4cgY2jhuqV0IGzGsOG7o25nIGNhbyknQ04ga8SpIHRodeG6rXQgY8O0bmcgdHLDrG5oIHjDonkgZOG7sW5nQkNOIGvEqSB0aHXhuq10IGPDtG5nIHRyw6xuaCB4w6J5IGThu7FuZyAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKRdDTiBrxKkgdGh14bqtdCBjxqEga2jDrTJDTiBrxKkgdGh14bqtdCBjxqEga2jDrSAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKRNDTiBjaOG6vyB04bqhbyBtw6F5LkNOIGNo4bq/IHThuqFvIG3DoXkgKEjhu4cgY2jhuqV0IGzGsOG7o25nIGNhbykfQ04ga8SpIHRodeG6rXQgY8ahIMSRaeG7h24gdOG7rTpDTiBrxKkgdGh14bqtdCBjxqEgxJFp4buHbiB04butIChI4buHIGNo4bqldCBsxrDhu6NuZyBjYW8pFUNOIGvEqSB0aHXhuq10IMO0IHTDtDBDTiBrxKkgdGh14bqtdCDDtCB0w7QgKEjhu4cgY2jhuqV0IGzGsOG7o25nIGNhbykWQ04ga8SpIHRodeG6rXQgbmhp4buHdDFDTiBrxKkgdGh14bqtdCBuaGnhu4d0IChI4buHIGNo4bqldCBsxrDhu6NuZyBjYW8pJENOIGvEqSB0aHXhuq10IMSRaeG7h24sIMSRaeG7h24gdOG7rT9DTiBrxKkgdGh14bqtdCDEkWnhu4duLCDEkWnhu4duIHThu60gKEjhu4cgY2jhuqV0IGzGsOG7o25nIGNhbyksQ04ga8SpIHRodeG6rXQgxJFp4buHbiB04butLCB0cnV54buBbiB0aMO0bmdHQ04ga8SpIHRodeG6rXQgxJFp4buHbiB04butLCB0cnV54buBbiB0aMO0bmcgKEjhu4cgY2jhuqV0IGzGsOG7o25nIGNhbyk0Q04ga8SpIHRodeG6rXQgxJFp4buBdSBraGnhu4NuIHbDoCB04buxIMSR4buZbmcgaMOzYU9DTiBrxKkgdGh14bqtdCDEkWnhu4F1IGtoaeG7g24gdsOgIHThu7EgxJHhu5luZyBow7NhIChI4buHIGNo4bqldCBsxrDhu6NuZyBjYW8pGUNOIGvEqSB0aHXhuq10IG3DoXkgdMOtbmg0Q04ga8SpIHRodeG6rXQgbcOheSB0w61uaCAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKRpDTiBr4bu5IHRodeG6rXQgaMOzYSBo4buNYx1DTiBrxKkgdGh14bqtdCBtw7RpIHRyxrDhu51uZzhDTiBrxKkgdGh14bqtdCBtw7RpIHRyxrDhu51uZyAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKQVDTiBJbiBDTiBJbiAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKRlRdeG6o24gbMO9IGPDtG5nIG5naGnhu4dwNFF14bqjbiBsw70gY8O0bmcgbmdoaeG7h3AgKEjhu4cgY2jhuqV0IGzGsOG7o25nIGNhbykbS+G7uSB0aHXhuq10IGPDtG5nIG5naGnhu4dwEENOIHRo4buxYyBwaOG6qW0rQ04gdGjhu7FjIHBo4bqpbSAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKQZDTiBtYXkhQ04gbWF5IChI4buHIGNo4bqldCBsxrDhu6NuZyBjYW8pMUvhu7kgdGh14bqtdCB4w6J5IGThu7FuZyBjw7RuZyB0csOsbmggZ2lhbyB0aMO0bmdMS+G7uSB0aHXhuq10IHjDonkgZOG7sW5nIGPDtG5nIHRyw6xuaCBnaWFvIHRow7RuZyAoSOG7hyBjaOG6pXQgbMaw4bujbmcgY2FvKRRLaW5oIHThur8gZ2lhIMSRw6xuaBUtCkM1MTAyMDIgQ0QKQzUxMDMwMSBDRApDNTEwMzAyIENECkQxNDAyMzEgREgKRDIxMDQwNCBESApEMzQwMTIyIERICkQzNDAzMDEgREgMRDM0MDMwMUMgREhDCkQ0ODAyMDEgREgMRDQ4MDIwMUMgREhDCkQ1MTAxMDIgREgMRDUxMDEwMkMgREhDCkQ1MTAyMDEgREgMRDUxMDIwMUMgREhDCkQ1MTAyMDIgREgMRDUxMDIwMkMgREhDCkQ1MTAyMDMgREgMRDUxMDIwM0MgREhDCkQ1MTAyMDUgREgMRDUxMDIwNUMgREhDCkQ1MTAyMDYgREgMRDUxMDIwNkMgREhDCkQ1MTAzMDEgREgMRDUxMDMwMUMgREhDCkQ1MTAzMDIgREgMRDUxMDMwMkMgREhDCkQ1MTAzMDMgREgMRDUxMDMwM0MgREhDCkQ1MTAzMDQgREgMRDUxMDMwNEMgREhDCkQ1MTA0MDEgREgKRDUxMDQwNiBESAxENTEwNDA2QyBESEMKRDUxMDUwMSBESAxENTEwNTAxQyBESEMKRDUxMDYwMSBESAxENTEwNjAxQyBESEMKRDUxMDYwMyBESApENTQwMTAxIERIDEQ1NDAxMDFDIERIQwpENTQwMjA0IERIDEQ1NDAyMDRDIERIQwpENTgwMjA1IERIDEQ1ODAyMDVDIERIQwpEODEwNTAxIERIFCsDLWdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZxYBZmQCAw8QDxYGHwAFB1Rlbktob2kfAQUGTWFLaG9pHwJnZBAVAxQtLS0tIFThuqV0IGPhuqMgLS0tLQRBLEExAkQxFQMBIwRBLEExAkQxFCsDA2dnZxYBZmQCBQ8PFgIeBFRleHQFJEPhuq1wIG5o4bqtdCDEkeG6v24gbmfDoHkgMTAvMDgvMjAxNWRkAgcPEGRkFgFmZAIJDzwrABEDAA8WBB8CZx4LXyFJdGVtQ291bnQCiAxkARAWAwICAgYCBxYDPCsABQEAFgIeCkhlYWRlclRleHQFCUjhu40gdMOqbjwrAAUBABYCHwUFEcSQaeG7g20gxrB1IHRpw6puPCsABQEAFgQfBQUbVOG7lW5nIMSRaeG7g20geMOpdCB0dXnhu4NuHgdWaXNpYmxlZxYDZmZmDBQrAAAWAmYPZBbKAQIBD2QWEGYPDxYCHwMFATFkZAIBDw8WAh8DBQlTR0QwMDEwMjNkZAICDw8WAh8DBRlOR1VZ4buETiBITyYjMTkyO05HIEPhuqZNZGQCAw8PFgIfAwUBMWRkAgQPDxYCHwMFATJkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQwLjUwZGQCBw8PFgIfAwUFMzYuMDBkZAICD2QWEGYPDxYCHwMFATJkZAIBDw8WAh8DBQlZRFMwMTIwODBkZAICDw8WAh8DBRdOR1VZ4buETiBUSEFOSCBTJiMxOTQ7TWRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzYuMDBkZAIDD2QWEGYPDxYCHwMFATNkZAIBDw8WAh8DBQlEUU4wMDc3NzlkZAICDw8WAh8DBRNOR1VZ4buETiBWxIJOIEjhu4xDZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTM1Ljc1ZGQCBA9kFhBmDw8WAh8DBQE0ZGQCAQ8PFgIfAwUJVFNOMDEyMjg3ZGQCAg8PFgIfAwUWxJAmIzE5MjtPIERVWSBQSMavxqBOR2RkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTM1LjAwZGQCBQ9kFhBmDw8WAh8DBQE1ZGQCAQ8PFgIfAwUJREhVMDE5MjI4ZGQCAg8PFgIfAwUXVFLGr8agTkcgQyYjMjEyO05HIFJVWU5kZAIDDw8WAh8DBQE0ZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzNS4wMGRkAgYPZBYQZg8PFgIfAwUBNmRkAgEPDxYCHwMFCURRTjAxODEyOWRkAgIPDxYCHwMFGk5HVVnhu4ROIEhPJiMxOTI7TkcgUVXhu5BDZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTM0Ljc1ZGQCBw9kFhBmDw8WAh8DBQE3ZGQCAQ8PFgIfAwUJU1BLMDA2ODMyZGQCAg8PFgIfAwUWxJAmIzE5MjtNIFRJ4bq+TiBM4buYQ2RkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTM0LjUwZGQCCA9kFhBmDw8WAh8DBQE4ZGQCAQ8PFgIfAwUJRFFOMDAwNzA2ZGQCAg8PFgIfAwUXTkdVWeG7hE4gQ0gmIzIwNTsgQuG6ok9kZAIDDw8WAh8DBQE0ZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzNC41MGRkAgkPZBYQZg8PFgIfAwUBOWRkAgEPDxYCHwMFCVRUTjAwNDg0MmRkAgIPDxYCHwMFFE5HVVnhu4ROIFRIQU5IIEjhuqJJZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTM0LjI1ZGQCCg9kFhBmDw8WAh8DBQIxMGRkAgEPDxYCHwMFCVRTTjAwNzEzOGRkAgIPDxYCHwMFGFRS4bqmTiBQSEkgVFXhuqROIEtJ4buGVGRkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMy43NWRkAgsPZBYQZg8PFgIfAwUCMTFkZAIBDw8WAh8DBQlTUEswMTEwMDhkZAICDw8WAh8DBRBOJiMyMDQ7TSBBIFPhuqZVZGQCAw8PFgIfAwUBMWRkAgQPDxYCHwMFATJkZAIFDw8WAh8DBQE2ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjc1ZGQCDA9kFhBmDw8WAh8DBQIxMmRkAgEPDxYCHwMFCUhEVDAwOTc1OWRkAgIPDxYCHwMFF8SQ4bq2TkcgU+G7rCBITyYjMTkyO05HZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzMy43NWRkAg0PZBYQZg8PFgIfAwUCMTNkZAIBDw8WAh8DBQlUVEcwMDM0MTRkZAICDw8WAh8DBRRQSOG6oE0gVEhBTkggxJBJ4buATmRkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjc1ZGQCDg9kFhBmDw8WAh8DBQIxNGRkAgEPDxYCHwMFCVFHUzAwMzUxOWRkAgIPDxYCHwMFG05HVVnhu4ROIMSQJiMyMDQ7TkggRMavxqBOR2RkAgMPDxYCHwMFATRkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjc1ZGQCDw9kFhBmDw8WAh8DBQIxNWRkAgEPDxYCHwMFCURRTjAxMjU1NGRkAgIPDxYCHwMFFFYmIzIxMzsgTUlOSCBMJiMyMjE7ZGQCAw8PFgIfAwUBMWRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjUwZGQCEA9kFhBmDw8WAh8DBQIxNmRkAgEPDxYCHwMFCVNQRDAwNTA2NGRkAgIPDxYCHwMFFk5HVVnhu4ROIFBIxq/hu5pDIExPTkdkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMzLjUwZGQCEQ9kFhBmDw8WAh8DBQIxN2RkAgEPDxYCHwMFCVRURzAxNDIxNmRkAgIPDxYCHwMFGE5HVVnhu4ROIEjhu5JORyBRVSYjMjA1O2RkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjUwZGQCEg9kFhBmDw8WAh8DBQIxOGRkAgEPDxYCHwMFCVRUTjAwMjA2NGRkAgIPDxYCHwMFHE5HVVnhu4ROIMSQJiMyMDQ7TkggQ8av4bucTkdkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzMuNTBkZAITD2QWEGYPDxYCHwMFAjE5ZGQCAQ8PFgIfAwUJVFRHMDEzMjU3ZGQCAg8PFgIfAwUjTkdVWeG7hE4gRMavxqBORyBUUsav4bucTkcgUEgmIzIxODtkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMzLjUwZGQCFA9kFhBmDw8WAh8DBQIyMGRkAgEPDxYCHwMFCVFHUzAxNjM4NmRkAgIPDxYCHwMFE05HVVnhu4ROIFbEgk4gVOG6oE9kZAIDDw8WAh8DBQExZGQCBA8PFgIfAwUBMmRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMy4yNWRkAhUPZBYQZg8PFgIfAwUCMjFkZAIBDw8WAh8DBQlUVEcwMDI4NzNkZAICDw8WAh8DBRtORyYjMjEyOyBUSCYjMTkyO05IIETGr8agTkdkZAIDDw8WAh8DBQExZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMzLjI1ZGQCFg9kFhBmDw8WAh8DBQIyMmRkAgEPDxYCHwMFCVRURzAwMzE5MmRkAgIPDxYCHwMFFk5HVVnhu4ROIFFV4buQQyDEkOG6oFRkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMmRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMy4yNWRkAhcPZBYQZg8PFgIfAwUCMjNkZAIBDw8WAh8DBQlEVFQwMDI1NjdkZAICDw8WAh8DBRVUUsavxqBORyBRVUFORyDEkOG6oFRkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMy4yNWRkAhgPZBYQZg8PFgIfAwUCMjRkZAIBDw8WAh8DBQlUU04wMTQxMjNkZAICDw8WAh8DBRRWJiMyMTM7IERVWSBUJiMxOTQ7TWRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMzLjI1ZGQCGQ9kFhBmDw8WAh8DBQIyNWRkAgEPDxYCHwMFCVRURzAxODgyMWRkAgIPDxYCHwMFE1YmIzIxMzsgTUlOSCBUSeG6vk5kZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzMuMjVkZAIaD2QWEGYPDxYCHwMFAjI2ZGQCAQ8PFgIfAwUJVFNOMDE4NzAxZGQCAg8PFgIfAwUWTCYjMjAyOyBDSCYjMjA1OyBUUlVOR2RkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjI1ZGQCGw9kFhBmDw8WAh8DBQIyN2RkAgEPDxYCHwMFCVRURzAxMzc5N2RkAgIPDxYCHwMFG05HVVnhu4ROIEhPJiMxOTI7SSBQSMavxqBOR2RkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMzLjI1ZGQCHA9kFhBmDw8WAh8DBQIyOGRkAgEPDxYCHwMFCUhVSTAwNjgzMGRkAgIPDxYCHwMFF1BIQU4gVFLhu4xORyBLSCYjMTkzO05IZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQE2ZGQCBg8PFgIfAwUEMi41MGRkAgcPDxYCHwMFBTMzLjI1ZGQCHQ9kFhBmDw8WAh8DBQIyOWRkAgEPDxYCHwMFCVRTTjAxMjY5N2RkAgIPDxYCHwMFFE5HVVnhu4ROIFThuqROIFFVQU5HZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzMuMjVkZAIeD2QWEGYPDxYCHwMFAjMwZGQCAQ8PFgIfAwUJVFNOMDA0Nzk1ZGQCAg8PFgIfAwUTQiYjMjE3O0kgU8SoIEhJ4bq+VWRkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMzLjAwZGQCHw9kFhBmDw8WAh8DBQIzMWRkAgEPDxYCHwMFCVRURzAwODQ4N2RkAgIPDxYCHwMFElRS4bqmTiBUSEFOSCBM4buYQ2RkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzMuMDBkZAIgD2QWEGYPDxYCHwMFAjMyZGQCAQ8PFgIfAwUJVFNOMDE0MDY5ZGQCAg8PFgIfAwUWTkdVWeG7hE4gVsSCTiBUJiMxOTQ7TWRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzMuMDBkZAIhD2QWEGYPDxYCHwMFAjMzZGQCAQ8PFgIfAwUJU1BEMDEzMTQ0ZGQCAg8PFgIfAwUXTCYjMTk0O00gSE8mIzE5MjtORyBWxahkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMzLjAwZGQCIg9kFhBmDw8WAh8DBQIzNGRkAgEPDxYCHwMFCVRUTjAwNjc0MGRkAgIPDxYCHwMFGUwmIzIwMjsgVknhur5UIEhPJiMxOTI7TkdkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMy4wMGRkAiMPZBYQZg8PFgIfAwUCMzVkZAIBDw8WAh8DBQlTUFMwMDMxMDZkZAICDw8WAh8DBRVOR1VZ4buETiBRVeG7kEMgRMWoTkdkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzMuMDBkZAIkD2QWEGYPDxYCHwMFAjM2ZGQCAQ8PFgIfAwUJRFRUMDAwODMyZGQCAg8PFgIfAwUWUEjhuqBNIFFVQU5HIEImIzIwNDtOSGRkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuNzVkZAIlD2QWEGYPDxYCHwMFAjM3ZGQCAQ8PFgIfAwUJU0dEMDE3MjA3ZGQCAg8PFgIfAwUfTkcmIzIxMjsgxJDhuq5DIEhPJiMxOTI7TkcgVsSCTmRkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMi43NWRkAiYPZBYQZg8PFgIfAwUCMzhkZAIBDw8WAh8DBQlUQ1QwMTQ2MzZkZAICDw8WAh8DBRZORyYjMjEyOyBHSUEgUEgmIzIxODtDZGQCAw8PFgIfAwUBMWRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQExZGQCBg8PFgIfAwUEMy41MGRkAgcPDxYCHwMFBTMyLjc1ZGQCJw9kFhBmDw8WAh8DBQIzOWRkAgEPDxYCHwMFCVNQSzAxMTc1NmRkAgIPDxYCHwMFGlRSxq/GoE5HIFbEgk4gUVXhu5BDIFRIQU5IZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATJkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMC41MGRkAgcPDxYCHwMFBTMyLjc1ZGQCKA9kFhBmDw8WAh8DBQI0MGRkAgEPDxYCHwMFCVRUTjAxNjkyM2RkAgIPDxYCHwMFFFBI4bqgTSBNSU5IIFQmIzE5NDtOZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjc1ZGQCKQ9kFhBmDw8WAh8DBQI0MWRkAgEPDxYCHwMFCURRTjAyNTg4OWRkAgIPDxYCHwMFFE5HVVnhu4ROIEFOSCBUUuG7jE5HZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzMi43NWRkAioPZBYQZg8PFgIfAwUCNDJkZAIBDw8WAh8DBQlUU04wMTk4OTZkZAICDw8WAh8DBQ9UUuG6pk4gQU5IIFbEgk5kZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuNzVkZAIrD2QWEGYPDxYCHwMFAjQzZGQCAQ8PFgIfAwUJVERWMDI5MzY1ZGQCAg8PFgIfAwUUTCYjMjAyOyDEkOG7qEMgVEjhu4xkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuNzVkZAIsD2QWEGYPDxYCHwMFAjQ0ZGQCAQ8PFgIfAwUJVFRHMDE1MjYyZGQCAg8PFgIfAwUYTkdVWeG7hE4gTkjhu7BUIFQmIzE5NDtNZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuNzVkZAItD2QWEGYPDxYCHwMFAjQ1ZGQCAQ8PFgIfAwUJRFFOMDEzNTU0ZGQCAg8PFgIfAwURViYjMjEzOyBU4bqkTiBOQU1kZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzMi43NWRkAi4PZBYQZg8PFgIfAwUCNDZkZAIBDw8WAh8DBQlRR1MwMDU0MzRkZAICDw8WAh8DBRLEkEnhu4JVIFbEgk4gSOG6rFVkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATFkZAIGDw8WAh8DBQQzLjUwZGQCBw8PFgIfAwUFMzIuNzVkZAIvD2QWEGYPDxYCHwMFAjQ3ZGQCAQ8PFgIfAwUJVFNOMDE5MTk0ZGQCAg8PFgIfAwUWTkdVWeG7hE4gTkfhu4xDIFRV4bqkTmRkAgMPDxYCHwMFATRkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi43NWRkAjAPZBYQZg8PFgIfAwUCNDhkZAIBDw8WAh8DBQlUVEcwMDA4NjlkZAICDw8WAh8DBRNOR1VZ4buETiBWxIJOIELhuqJPZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuNTBkZAIxD2QWEGYPDxYCHwMFAjQ5ZGQCAQ8PFgIfAwUJVFNOMDAwOTIxZGQCAg8PFgIfAwUTTkcmIzIxMjsgTkfhu4xDIENBTmRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjUwZGQCMg9kFhBmDw8WAh8DBQI1MGRkAgEPDxYCHwMFCVFHUzAyMTEzOWRkAgIPDxYCHwMFFk5HVVnhu4ROIFFVQU5HIFRS4buMTkdkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMmRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQwLjUwZGQCBw8PFgIfAwUFMzIuNTBkZAIzD2QWEGYPDxYCHwMFAjUxZGQCAQ8PFgIfAwUJRFFOMDI0MTQ1ZGQCAg8PFgIfAwUVTkdVWeG7hE4gTOG7mEMgVOG7ik5IZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuNTBkZAI0D2QWEGYPDxYCHwMFAjUyZGQCAQ8PFgIfAwUJU1BTMDExNjUzZGQCAg8PFgIfAwUVxJDhu5YgSE8mIzE5MjtORyBNSU5IZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFATJkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMC41MGRkAgcPDxYCHwMFBTMyLjUwZGQCNQ9kFhBmDw8WAh8DBQI1M2RkAgEPDxYCHwMFCVNQRDAwNTc3NGRkAgIPDxYCHwMFFk5HVVnhu4ROIEhPJiMxOTI7SSBOQU1kZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi41MGRkAjYPZBYQZg8PFgIfAwUCNTRkZAIBDw8WAh8DBQlUVEcwMTAzMzJkZAICDw8WAh8DBSBORyYjMjEyOyBOR1VZ4buETiBUUuG7jE5HIE5HSMSoQWRkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuNTBkZAI3D2QWEGYPDxYCHwMFAjU1ZGQCAQ8PFgIfAwUJSFVJMDA0MjEyZGQCAg8PFgIfAwUUViYjMjEzOyBBTkggSCYjMTkyO09kZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi41MGRkAjgPZBYQZg8PFgIfAwUCNTZkZAIBDw8WAh8DBQlUU04wMDUwMTJkZAICDw8WAh8DBRNOR1VZ4buETiBIVVkgSEnhu4ZVZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFATJkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQwLjUwZGQCBw8PFgIfAwUFMzIuNTBkZAI5D2QWEGYPDxYCHwMFAjU3ZGQCAQ8PFgIfAwUJVERMMDE2NjY0ZGQCAg8PFgIfAwUYVFLhu4pOSCBRVeG7kEMgVFLGr+G7nk5HZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuNTBkZAI6D2QWEGYPDxYCHwMFAjU4ZGQCAQ8PFgIfAwUJVFROMDA4NzE0ZGQCAg8PFgIfAwUXVFLGr8agTkcgRFVZIEtIJiMxOTM7TkhkZAIDDw8WAh8DBQE0ZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi41MGRkAjsPZBYQZg8PFgIfAwUCNTlkZAIBDw8WAh8DBQlUU04wMTUwMjVkZAICDw8WAh8DBRbEkOG6tk5HIFZJ4buGVCBUSOG6rk5HZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuNTBkZAI8D2QWEGYPDxYCHwMFAjYwZGQCAQ8PFgIfAwUJRFFOMDIwMDU4ZGQCAg8PFgIfAwUUViYjMjEzOyBWxIJOIFRI4bqgQ0hkZAIDDw8WAh8DBQE0ZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuNTBkZAI9D2QWEGYPDxYCHwMFAjYxZGQCAQ8PFgIfAwUJSFVJMDEwMDE4ZGQCAg8PFgIfAwUWTkdVWeG7hE4gxJDhu6hDIE5H4buMQ2RkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjI1ZGQCPg9kFhBmDw8WAh8DBQI2MmRkAgEPDxYCHwMFCVRTTjAxNjk2N2RkAgIPDxYCHwMFFE5HVVnhu4ROIE1JTkggVEnhur5OZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATJkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQwLjUwZGQCBw8PFgIfAwUFMzIuMjVkZAI/D2QWEGYPDxYCHwMFAjYzZGQCAQ8PFgIfAwUJU0dEMDExNjIwZGQCAg8PFgIfAwUSU+G6qE0gS+G7siBRVVnhu4BOZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQE2ZGQCBg8PFgIfAwUEMi41MGRkAgcPDxYCHwMFBTMyLjI1ZGQCQA9kFhBmDw8WAh8DBQI2NGRkAgEPDxYCHwMFCVRTTjAwNjcxNmRkAgIPDxYCHwMFFk5HVVnhu4ROIFFV4buQQyBLSOG6oklkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjI1ZGQCQQ9kFhBmDw8WAh8DBQI2NWRkAgEPDxYCHwMFCVFHUzAwNDc3OGRkAgIPDxYCHwMFGEwmIzE5NDtNIFhVJiMxOTQ7TiBI4bqiSWRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi4yNWRkAkIPZBYQZg8PFgIfAwUCNjZkZAIBDw8WAh8DBQlUVEcwMTY1MTRkZAICDw8WAh8DBRdOR1VZ4buETiBWSeG7hlQgVEjhuq5OR2RkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMC41MGRkAgcPDxYCHwMFBTMyLjI1ZGQCQw9kFhBmDw8WAh8DBQI2N2RkAgEPDxYCHwMFCURRTjAwNjU0N2RkAgIPDxYCHwMFFEwmIzIwMjsgVOG6pE4gSEnhu4BOZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjI1ZGQCRA9kFhBmDw8WAh8DBQI2OGRkAgEPDxYCHwMFCVNQSzAxNTEyM2RkAgIPDxYCHwMFFUhPJiMxOTI7TkcgQU5IIFRV4bqkTmRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjI1ZGQCRQ9kFhBmDw8WAh8DBQI2OWRkAgEPDxYCHwMFCVFHUzAwOTQzMmRkAgIPDxYCHwMFGE5HVVnhu4ROIEtIJiMxOTM7TkggTElOSGRkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMi4yNWRkAkYPZBYQZg8PFgIfAwUCNzBkZAIBDw8WAh8DBQlURFYwMzYyMTRkZAICDw8WAh8DBRhOR1VZ4buETiBUSCYjMTkyO05IIFZJTkhkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMjVkZAJHD2QWEGYPDxYCHwMFAjcxZGQCAQ8PFgIfAwUJRFFOMDI5MzE1ZGQCAg8PFgIfAwUYUEjhuqBNIFRIJiMxOTI7TkggJiMyMjE7ZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuMjVkZAJID2QWEGYPDxYCHwMFAjcyZGQCAQ8PFgIfAwUJRFFOMDI2MjA5ZGQCAg8PFgIfAwURVFLhuqZOIE5Ixq8gVFJVTkdkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjI1ZGQCSQ9kFhBmDw8WAh8DBQI3M2RkAgEPDxYCHwMFCVRURzAwMTUwM2RkAgIPDxYCHwMFFkwmIzIwMjsgUVXhu5BDIENISeG6vk5kZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi4yNWRkAkoPZBYQZg8PFgIfAwUCNzRkZAIBDw8WAh8DBQlTUEswMDA4OTRkZAICDw8WAh8DBRlUUsavxqBORyBDJiMyMTI7TkcgQuG6sE5HZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMjVkZAJLD2QWEGYPDxYCHwMFAjc1ZGQCAQ8PFgIfAwUJVFRHMDE1Nzc2ZGQCAg8PFgIfAwUVTkdVWeG7hE4gSOG7kk5HIFRIQU5IZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzMi4yNWRkAkwPZBYQZg8PFgIfAwUCNzZkZAIBDw8WAh8DBQlUU04wMTY4OTBkZAICDw8WAh8DBR5MJiMyMDI7IFRI4buKIEImIzIwNTtDSCBUSeG7gE5kZAIDDw8WAh8DBQE0ZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjI1ZGQCTQ9kFhBmDw8WAh8DBQI3N2RkAgEPDxYCHwMFCVNQUzAwMzA2OWRkAgIPDxYCHwMFGEwmIzIwMjsgSE8mIzE5MjtORyBExahOR2RkAgMPDxYCHwMFATRkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMC41MGRkAgcPDxYCHwMFBTMyLjI1ZGQCTg9kFhBmDw8WAh8DBQI3OGRkAgEPDxYCHwMFCVRTTjAxNTA2M2RkAgIPDxYCHwMFF05HVVnhu4ROIMSQ4buoQyBUSOG6rk5HZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuMjVkZAJPD2QWEGYPDxYCHwMFAjc5ZGQCAQ8PFgIfAwUJVERMMDA0NjQ5ZGQCAg8PFgIfAwUSUEjhuqBNIE1JTkggSEnhur5VZGQCAw8PFgIfAwUBMWRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMDBkZAJQD2QWEGYPDxYCHwMFAjgwZGQCAQ8PFgIfAwUJU1BLMDA2OTM4ZGQCAg8PFgIfAwUkSE8mIzE5MjtORyDEkCYjMjA0O05IIE1JTkggTFUmIzE5NDtOZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMDBkZAJRD2QWEGYPDxYCHwMFAjgxZGQCAQ8PFgIfAwUJRFRUMDEwMTI3ZGQCAg8PFgIfAwUTQiYjMjE3O0kgVsSCTiBQSE9OR2RkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjAwZGQCUg9kFhBmDw8WAh8DBQI4MmRkAgEPDxYCHwMFCVNQSzAwMTM3MGRkAgIPDxYCHwMFF0ImIzIxNztJIFbEgk4gQyYjMjEyO05HZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjAwZGQCUw9kFhBmDw8WAh8DBQI4M2RkAgEPDxYCHwMFCVNQUzAxNTczOWRkAgIPDxYCHwMFGE5HVVnhu4ROIFRSxq/hu5xORyBQSE9OR2RkAgMPDxYCHwMFATJkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAlQPZBYQZg8PFgIfAwUCODRkZAIBDw8WAh8DBQlUQUcwMDQ5MDNkZAICDw8WAh8DBRZQSOG6oE0gVEhBTkggSE8mIzE5MjtJZGQCAw8PFgIfAwUBMmRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMDBkZAJVD2QWEGYPDxYCHwMFAjg1ZGQCAQ8PFgIfAwUJVFNOMDEwNTMyZGQCAg8PFgIfAwUUxJDhurZORyBRVeG7kEMgTkfhu65kZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuMDBkZAIHDw8WAh8DBQUzMi4wMGRkAlYPZBYQZg8PFgIfAwUCODZkZAIBDw8WAh8DBQlTUFMwMDY4NTJkZAICDw8WAh8DBRhIVeG7sk5IIFThuqROIEhPJiMxOTI7TkdkZAIDDw8WAh8DBQEyZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMDBkZAJXD2QWEGYPDxYCHwMFAjg3ZGQCAQ8PFgIfAwUJVFRHMDAxNDc5ZGQCAg8PFgIfAwUWTCYjMjAyOyBRVUFORyBDSCYjMjA1O2RkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjAwZGQCWA9kFhBmDw8WAh8DBQI4OGRkAgEPDxYCHwMFCURIVTAyNTU3M2RkAgIPDxYCHwMFFFYmIzIxMzsgVsSCTiBUJiMyMTg7ZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjAwZGQCWQ9kFhBmDw8WAh8DBQI4OWRkAgEPDxYCHwMFCVRURzAwOTE2MGRkAgIPDxYCHwMFFE5HVVnhu4ROIFFV4buQQyBNSU5IZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFAzJOVGRkAgUPDxYCHwMFATBkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuMDBkZAJaD2QWEGYPDxYCHwMFAjkwZGQCAQ8PFgIfAwUJU1BLMDEzNjQ5ZGQCAg8PFgIfAwUTUEhBTiBUUlVORyBUJiMyMDU7TmRkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAlsPZBYQZg8PFgIfAwUCOTFkZAIBDw8WAh8DBQlEUU4wMDE2MDZkZAICDw8WAh8DBRNUUuG6pk4gVsSCTiBDSEnhur5OZGQCAw8PFgIfAwUBM2RkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQEwZGQCBg8PFgIfAwUEMS41MGRkAgcPDxYCHwMFBTMyLjAwZGQCXA9kFhBmDw8WAh8DBQI5MmRkAgEPDxYCHwMFCVNQUzAwODQzM2RkAgIPDxYCHwMFEsSQ4buWIFRV4bqkTiBLSEFOR2RkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQEyZGQCBQ8PFgIfAwUBMGRkAgYPDxYCHwMFBDAuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAl0PZBYQZg8PFgIfAwUCOTNkZAIBDw8WAh8DBQlIVUkwMDc0MjZkZAICDw8WAh8DBR5CJiMyMTc7SSBMJiMyMDI7IE5Hxq8gTCYjMTk0O05kZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAl4PZBYQZg8PFgIfAwUCOTRkZAIBDw8WAh8DBQlEUU4wMjQzNDZkZAICDw8WAh8DBRVQSCYjMjA1OyDEkOG7qEMgVOG7mklkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAl8PZBYQZg8PFgIfAwUCOTVkZAIBDw8WAh8DBQlUREwwMTE2MTdkZAICDw8WAh8DBRhOR1VZ4buETiBWxaggVEhBTkggUVVBTkdkZAIDDw8WAh8DBQEzZGQCBA8PFgIfAwUBMWRkAgUPDxYCHwMFBiZuYnNwO2RkAgYPDxYCHwMFBDEuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAmAPZBYQZg8PFgIfAwUCOTZkZAIBDw8WAh8DBQlEQ1QwMDQ4MDFkZAICDw8WAh8DBQhST05MIEtFTmRkAgMPDxYCHwMFATNkZAIEDw8WAh8DBQExZGQCBQ8PFgIfAwUBMWRkAgYPDxYCHwMFBDMuNTBkZAIHDw8WAh8DBQUzMi4wMGRkAmEPZBYQZg8PFgIfAwUCOTdkZAIBDw8WAh8DBQlEQ1QwMDY2NzBkZAICDw8WAh8DBRNIVeG7sk5IIE5I4buwVCBNSU5IZGQCAw8PFgIfAwUBNGRkAgQPDxYCHwMFATFkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjUwZGQCBw8PFgIfAwUFMzIuMDBkZAJiD2QWEGYPDxYCHwMFAjk4ZGQCAQ8PFgIfAwUJRFFOMDE5NDQwZGQCAg8PFgIfAwURVFLhuqZOIE1JTkggU+G7rFVkZAIDDw8WAh8DBQE0ZGQCBA8PFgIfAwUDMk5UZGQCBQ8PFgIfAwUGJm5ic3A7ZGQCBg8PFgIfAwUEMS4wMGRkAgcPDxYCHwMFBTMyLjAwZGQCYw9kFhBmDw8WAh8DBQI5OWRkAgEPDxYCHwMFCVlEUzAxNzM1M2RkAgIPDxYCHwMFEkImIzIxNztJIE1JTkggVsSCTmRkAgMPDxYCHwMFATRkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzIuMDBkZAJkD2QWEGYPDxYCHwMFAzEwMGRkAgEPDxYCHwMFCVNQSzAxNDgyMmRkAgIPDxYCHwMFG1FVJiMxOTM7Q0ggVEgmIzE5MjtOSCBUUlVOR2RkAgMPDxYCHwMFATFkZAIEDw8WAh8DBQMyTlRkZAIFDw8WAh8DBQYmbmJzcDtkZAIGDw8WAh8DBQQxLjAwZGQCBw8PFgIfAwUFMzEuNzVkZAJlDw8WAh8GaGRkGAEFK2N0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEkVHJhQ3V1MSRHcmlkVmlldzEPPCsADAEIAhBkixATDXn+xsT+HI99pCin3z+lzLqDmdlrDRakHD60Jfw="

var Run = function(_faculty, _school_type, _khoi) {
  var req = unirest("POST", "http://kqxttt.hcmute.edu.vn");
  
  req.headers({
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36",
    "Cookie": "ASP.NET_SessionId=5wu2zdbfgidn2bmwuwg0yfog; BIGipServerWeb_Pool=17435146.20480.0000",
    "Connection": "keep-alive",
  });
  
  req.form({
    "ctl00$ScriptManager1": "ctl00$ContentPlaceHolder1$TraCuu1$UpdatePanel1|ctl00$ContentPlaceHolder1$TraCuu1$ddlChonNganh",
	"ctl00$ContentPlaceHolder1$TraCuu1$ddlChonNganh": _faculty + " " + _school_type,
	"ctl00$ContentPlaceHolder1$TraCuu1$ddlKhoi": _khoi,
	"ctl00$ContentPlaceHolder1$TraCuu1$ddlNguyenVong": "0",
	"__ASYNCPOST": "true",
	"__EVENTTARGET": "ctl00$ContentPlaceHolder1$TraCuu1$ddlChonNganh",
	"__EVENTVALIDATION": __EVENTVALIDATION,
	"__VIEWSTATE": __VIEWSTATE,
  });
  
  req.end(function (res) {
    if (res.error) {
      console.log("Please reset token: http://kqxttt.hcmute.edu.vn/");
      throw new Error(res.error);
    }
    
    var env = require('jsdom').env;
    var html = res.body;
  
    // first argument can be html string, filename, or url
    env(html, function (errors, window) {
        console.log(errors);
        
        var $ = require('jquery')(window);
        var ufmTableData = $('#ContentPlaceHolder1_TraCuu1_GridView1 tr');
        // console.log(ufmTableData.text())
        
        if (ufmTableData.length) {
            var trs = $(ufmTableData)//.children("tr");
            $.each(trs, function(n, tr) {
                  var tds = $(tr).children("td");
                  var student = {
                      student_name: '',
                      student_id: '',
                      school_code: "DMS", // Ma~ truo`ng
                      faculty_code: _faculty, // Nga`nh 
                      subject_group: getSubjectGroup(_subjectGroup),
                      priority: 0, // So thu tu nguyen vong uu tien
                      score_1 : 0,
                      score_2 : 0,
                      score_3 : 0,
                      score_priority: 0,
                      score_sum : 0
                  };
                  
                  $.each(tds, function(n, td) {
                      if (n == 1) student.student_id = $(td).text().trim();
                      if (n == 2) student.student_name = $(td).text().trim();
                      if (n == 4) student.priority = parseInt($(td).text().trim());
                      if (n == 5) student.score_sum = parseFloat($(td).text().trim());
                      if (n == 6) student.score_priority = parseFloat($(td).text().trim());
                  });
                  
                  // console.log(student);
                  if (student.score_sum > 0) {
                    var saver = new Student(student);
          					saver.save(function (err, data) {
                      if (err) console.log("Error", err.message) 
          					  else console.log('Saved ', data._id);
          					});  
                  }
            });
        }
    });
  });
};

var subjectGroup = [
  {id: "A00", value: "Toán-Lý-Hóa"},
  {id: "A01", value: "Toán-Lý-Anh"},
  {id: "C01", value: "Toán-Văn-Lý"},
  {id: "D01", value: "Toán-Văn-Anh"},
];

var Faculty = [
   {id: "D220201", text: "Ngôn ngữ Anh"},
   {id: "D340101", text: "Quản trị kinh doanh"},
   {id: "D340103", text: "Quản trị dịch vụ du lịch và lữ hành"},
   {id: "D340107", text: "Quản trị khách sạn"},
   {id: "D340109", text: "Quản trị Nhà hàng và dịch vụ ăn uống"},
   {id: "D340115", text: "Marketing"},
   {id: "D340116", text: "Bất động sản"},
   {id: "D340120", text: "Kinh doanh quốc tế"},
   {id: "D340201", text: "Tài chính - Ngân hàng"},
   {id: "D340301", text: "Kế toán"},
   {id: "D340405", text: "Hệ thống thông tin quản lý"},
];

var getSubjectGroup = function(subjectGroupCode) {
    for (var i in subjectGroup) {
        if (subjectGroupCode == subjectGroup[i].id) return subjectGroup[i].value;
    }

    return "";
};

for (var i in Faculty) {
    for (var j in subjectGroup) {
        Run(Faculty[i].id, subjectGroup[j].id);
    }
}