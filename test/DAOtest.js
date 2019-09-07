const NaiveStateDAO = artifacts.require("NaiveStateDAO")

async function forceMine(n) {
  return await Promise.all(Array(n).fill(":/").map(() => {
    return web3.currentProvider.send({
      id: new Date().getTime(),
      jsonrpc: "2.0",
      method: "evm_mine"
    }, (err)=> {})
  }))
}

contract("NaiveStateDAO", ([alice, bob, vick, ...acounts]) => {

  let dao
  beforeEach(async () => {
    dao = await NaiveStateDAO.new()
  })

  it("works motherfucker", async () => {
    const proposal = "https://google.com"
    await dao.join()
    await dao.join({from: bob})
    await dao.join({from: vick})

    await dao.propose(proposal)

    await dao.vote(proposal, true)
    await dao.vote(proposal, true, {from: bob})
    await dao.vote(proposal, false, {from: vick})

    await forceMine(241)

    await dao.execute(proposal)

    assert.equal(await dao.ui(), proposal)
  })
})
