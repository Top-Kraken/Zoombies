const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();


      var wallets = [
  /*      "0x2D514928e5A6Ff0f5181048f8392f7fa0178BE14",
        "0xd70342427A9c3e37309b09861c95dc1a5fA6cC79",
        "0x96b6655638FD3d47A847256E775c43203FaFA3A6",
        "0xf0DC1acc7ABFbac9289a9CEfB91E48f51A0F7fCE",
        "0x595BaC6E755bFFfdAcc6fEE1CD7C0ff19aAa5337",
        "0xe1706F8E82D9D610246D56b3cC12ad58217de952",
        "0xF8019F1B3D886F1124dcd60927709f4F1eCAF44B",
        "0x6Dd4Ec552f0095D1e7192D58a3DFF41E37a46023",
        "0x5F98EF5669cE0A12026741555B708b683Aa714C9",
        "0xDD4cCa397EcC8d2C049C4E9c296D78587f5D6e3d",
        "0x5be7654baDB417F448b127aD578de45cF42a809A",
        "0x5C04796d63cDe2c605714d990d9C1FB24DF4766e",
        "0xe5518670345b2519Cb52902ca9757922B0a0C99D",
        "0x1921499DBF55d7C2Cf3cebd1707D1b7Bd92c1d62",
        "0xb18B2E7FFF89F22b70Db2806d0A4Ba0ea459d244",
        "0x26b1693b69324652B60DF77F51770D622FE94a0E",
        "0x3df82D87Cd9f65C37327b0cdDa7cB5997321a152",
        "0xFD8ca56F9F6751272afAef36b514565b17E2eEAA",
        "0xBBd908691Dd03BfAF19fF00E0e379Fe6641F4488",
        "0x15fFecea2660869C8C04ab39Fe7c0251fE305D36",

  */
        "0xAcBE36430273e266D7F8c3fFc65fc84a7f6b29DD",
        "0x5856A27F04639291470B35aCAaf15D64394Bb0eD",
        "0x3ED932a5260199af046cc83e63752D6b43ddfB9F",
        "0x4d079Ab8ed6B62A4611363C96cc566BEB295F99c",
        "0x73b0E147F0Aaa4423dF9D9246db2033b3Ca138f0",
        "0xe55332a39EbFaD1B7d3EDE237603c394583221d8",
        "0xbB79E9874c36609bDCecD4a644822FbA8431fA64",
        "0xcfb1df0143e29dc85753EB727cB495f0943491e8",
        "0x64F124A1F3A96af27308417eaC755e5C64448eDb",
        "0x794DF29D51F8FA9bF4f215422C6a7dE4d93F72Bb",
        "0x95914b943a0D08fAFa31fBdF71182dccee7dE927",
        "0x1C89c5DFEAB4356d17a46115050507cE4edF7271",
        "0x4519327eEE0FC11B1459d814962829f15a2C461f",
        "0x931ce5271EbFB4f0Fb3e3EE3542E70d25a260Dd7",
        "0xA23AA3d0283A5ba87501a74201A8DdeD16eEC0cE",
        "0xEA5f6202b6C61631EDd3628A7E00AF718E519607",
        "0x05d1af745A4eFd6886621421e6A6d60ded47e839",
        "0xd68D928e4a2d77a58366edB4c050E5f8D5837Cb3",
        "0x3346D714767a1219ce5A8AD6D5dD29377Ee8f865",
        "0xd38e9d0976A17c35BB573be283D40ee189B82Da2",
        "0xBb4072c292728f64623F6262153983571c7259Ac",
        "0xb52baAb57E8BcDa7B8d25993425aBc1a5aA866F2",
        "0x141a6d9dF90A6659bF1eF516b1A27f71E2C0Ec20",
        "0xb4bE53f09766ff27768AF0Dd84702502eFA208F9",
        "0xC21015c3481422Bf87A59c3054c98a77C1c5dE6d",
        "0x31Af4a9B57FcE283Fb86DcC0E1054279fA295B1B",
        "0x1aD54f3d1c00a7069538eaF46C4e292E411793BC",
        "0xd7c6Cb35F6dc23f25670924a9460835Ae46CBEB8",
        "0xBFf4cb1Fc216ce9aAd1870D4FbCBa43B44ac0F0c",
        "0x52Af217e83ecd26280359D40Ff46081965EaD407",
        "0xc5442881f42CD838e518b8F968b5Af65ade8B964",
        "0x5bB22cD3fFfb5817b4AAc0980C9fD3a158932708",
        "0x4ee0Cacf3Dc35a9e75a84979Dd2623e912df2eC4",
        "0xE6A6C0FE7a53622815575a7B27c3506ee8aa8Ba4",
        "0x782c427dd1Ebb07454921a633ce49B08750401Db",
        "0x5E45922b0984263388F908453040dEfEB549Fdf5",
        "0xA19EF3A0A11F377BcC50696A4ED4e651D69021fF",
        "0x5D2E90b457354778dc1a861578F651F835C6F006",
        "0x2c99735ded71E30Fe6E14eE719F4CAE1125aaB7f",
        "0xfa5553128d7225531Bd7dAba3F9f0E90F2962e02",
        "0x27aEce857D00FE022c9486e00C472EA70b61ba2E",
        "0x9180eD85dc07656FD9D1645ecdc15B75b18bDD5B",
        "0x9a4f900E5fcAd47Ef6Efc468aa99491ccA9FB568",
        "0x39041bb8497860A919330EEa1010198C1CeE6bD7",
        "0x3245EFd37E499dBA963a337578E33bC001a63dE3",
        "0x45f01e7B5a2Db74d0FD5F7C8d0f9335A2fBeFbD8",
        "0xDa981391888c0192c126B9C5641065892683b25D",
        "0x9fB09B5A3d16DCE3188cD6B986D4543f70D18626",
        "0xc5467213593778E528f0eB8117cc7AFBC5b7491b",
        "0x4269bf9727eD052c40e6F127Ee0DD5E2DDeE6289",
        "0x2AB91Cf6d33B988d8C4567adc50453CaDE85346B",
        "0x80607Df177FF847B0d7BEAffF0E5957519f0d2E8",
        "0x0CB72f140a259982a5D4a81FA079Ffb0B443A092",
        "0x3ca2Ba7230E290C6611df9ed5642D5821966b4ed",
        "0x8d41bc603A7e4D9129a731015b2503eD8588b9e2",
        "0xbDAFd4AC5F602851507d4Ee1e831d06428f75b65",
        "0xf21bE1116aa05cf666734C226Da424569FC46Dc4",
        "0x506298CC53F59B2E03A623b65aBb056f4B34105B",
        "0x77962c9bfbC3d521B0C14a0a14671A7dD1F4E28E",
        "0xFE67676344547F2B59f6ee40196cC342868baAa9",
        "0x2Fc851aF26CeD24Fb0ec73F961ea35e282637610",
        "0xA03f119E9B9c88626FE030B68A05666846bb16B4",
        "0x9d1ba4296e918A0cD6B0d30D82e922e656c9196B",
        "0x06120595EeB82563C5060628A27D1D93E9F723a6",
        "0x6CeD1Dbe751323C547ffa67B361778fa6f03960a",
        "0x7be9E3e009B864A567388c879384A8f62A4E5e75",
        "0x35F7e17e39cA6cB7344445B119B23e173229381B",
        "0x7332a7474970fd719cf7BFCE4EE3C8355C444478",
        "0x154B86AC5D761DcB21a81e6DCbbe06583404E1E6",
        "0xe2D6CAD904514f741e120525F50FdE1C883cDa5D",
        "0x4E0832B9249338e304d1b64a129EC7C443C088a0",
        "0xC72B76292f925A5b65289084C0c26305bD313eA8",
        "0x172A93dBe316B3c4F8677C67eF084E437FBf7462",
        "0x2c24daa7f1925f0FF2bb0fcEf38Ff7613ff824A3",
        "0xcFd4A8c69FD18cb4E571371EBF93e8Ce9f9baFa3",
        "0x2aB1561E4feb7D89BC131575703D87D36827c1Bf",
        "0xA532e9C59aA9ca1cA6832240F2aD52e329dCCacb",
        "0x73A744EE186E8B6245a1A9efC986D5016fF26c55",
        "0xC8850bB813123B88A3358Ace6F709b1D8D67bD31",
        "0xB0C05A1364EE45c851AcEAbf746c2D302E64e273",
        "0x3e845787007B74175b313968AB13dC7a7d777D80",
        "0xcA93D01636f5c35c2ad41346DA826BD9A6e1d85D",
        "0xc1C69f223f72861578389746931647AC0985D70e",
        "0x86E4044B9104bDeD55fA6A55dF18F0ad82ADC462",
        "0x2EA5C5b4cE93ab06E199449eEe48e0561834C327",
        "0xc76dC52cDc620480C81c8de2c2d71e6fc853A7ff",
        "0xb44bE5A6aE553a3339A21c508373b54Bf6850A0c",
        "0x914A81E4C4E47DD380c0d54E1859C451bD1Cb2Be",
        "0xdde33d58294cC87e805488fFe045Fed087107068",
        "0x7C4bEdD3c5E84a683421A4811Cbfe247424CE829",
        "0xA062Ea3592Bf54Ca3cbDFe09Cce4B99FE4e635af",
        "0xaF0177cd8850f8fAEA6c69d0A7F9c89482c116f3",
        "0xcdF4373714F405fF178d3e26692314335398CB34",
        "0x0f338eB4e876F552B57f57d34577170067183387",
        "0x6314a3a2d6d19e79169425F2C1491bEce5C985bE",
        "0xe7A0171066454aa41F2318C84B07797ea78509f3",
        "0x08a62cF8171c322336252db99eb40b5c2E31eA4b",
        "0x24c6212Ae0230a7493a2EB036d197E1C5f6C9d9F",
        "0x9204e7A4c6b10bc858ED56D712fa2fCc031a7700",
        "0x79CD45EfdDF314F910426aBDe4a13dDD94De8799",
        "0xB9e8Ae14Abe43e5017d01a7Ef5F2C3C0B2052AB6",
        "0x3cF224633b162F272e5776CC4e4D196b7C4a142a",
        "0x1B072741fc92158bB9e2203d2C28957B178CF7CB",
        "0xD6505059Dfa8C9e6C72720a835479c2Ea89b9Dbc",
        "0x97f999E1B6C1B28F44eAb7570d2e8E37BDF40B37",
        "0x468BE4258E17442563381281f562EeE10eF4f62A",
        "0x83D047BcAE0E421180E2A530caAD190f79Ec6B8F",
        "0xEd1d431De8eB00A415E9216222CF540b781a6F8a",
        "0x1c0c101b6e43bfB4e1A54C1cB8Aa4f0301036a52",
        "0x4f3DcEd7ce1F5646E7f7a7fA36ED59C27cE85526",
        "0xbd17cc2AF8492D6BE8f6609A73702cd529F4d352",
        "0x55848A002cc2660cCA35E529332ED8da4CbA8693",
        "0xD9E9A6A78e0B3cCFdA76DFE208B9e93c3cb91319",
        "0xdf55bB519356751eb317925a272b1510A20F17B1",
        "0xe5E561C2E6C76BB90F74BB1361dd82DF2f872305",
        "0x0f77C86690E7044c6E79A52fbFDe7f65cF341d25",
        "0x5c77f89355FF025c7fFFdf51b57765717589843B",
        "0x5E4648a5b0490e8357eD33B75AF9A1aFF8a8D7f7",
        "0x9070b831B2a5D4719Ba651485689B0037C93047D",
        "0xEf742E939Ee2d55bF1341684F209074fA059DA8C",
        "0x3e5181075C0374c239c3d6E4431129126e96Cff5",
        "0x175EcaB305C525DDc165c658E0B08EC8a2c50AbF",
        "0x930f8C07d1A9Fb56A859c095e4eB1489d8C27088",
        "0x4256BE26ea66918066485AbD2523bd135F0b9540",
        "0x5442aD8e71645968257c16C94B68BfE5e0dAfEF6",
        "0xB2b74E4D362549149aEaFf90E31cC93696f06c4F",
        "0x42C5CbB991980aAc3ABAE2aCB98A3A58DF81Fe45",
        "0x15C6A41eb7E8018fB5759CF70124560cFCDb1F27",
        "0x25fA7675261657537cbE61431FfA07Af9b283A09",
        "0xFCfFb01C20073B143F20f687eE56Fb6e87f3f0c6",
        "0x6388D69fF2d2Da2a9cB1444025d384C771f1dbf4",
        "0xC952B648EF968a5B86Bf0359e7d60E20E4a86D08",
        "0xC205bE01E734E53F36b80984014f17496B8ae79E",
        "0xaaDbcAEA39170Af856D7E701D3f40587b6Cb6B52",
        "0x16051415aE3eBdb7435A56d94f1cE68320A7dD11",
        "0x8e7C0189728b0a9A4B9326D5E0D8b751f122D4E4",
        "0xc78cfA439ed0A108d4854089bF3B0556a06B4674",
        "0xF7db276C89DD72740C70bc152bd180Be678D195F",
        "0xfFf2381b59A3a46b3388fc03dbBa27c88FE6f290",
        "0x95B2862f8D6D3391Ded7C9615901Ae5d2D1fc343",
        "0xd69dc5f8807d5ba56eea96cff577b102ff30beab",
        "0xcBc26d9F14A2270D285B573f15b4e4788B021Ea0",
        "0x1BC64055c6F23022a3b5025fe8D898e9E014D6d9",
        "0x4A0d11833934D299852D58C2bA2cA6Df7eD48027",
        "0x09DE0b4950c586431A591b75BeB889A71Bba09DA",
        "0xcB073A442F1a3BE5F3e2bb133922160f9b2C6bbD",
        "0xB88C0F54496576A85291B6e00A374FcE7227604a",
        "0x5EeF05c105d87b6EB887B6cC45768BFf45CF1A20",
        "0xA566a22Ba5602BfE343A75c4C908d0043A6b80b8",
        "0x066B75DFdc560965df081cF4c1f9ecdf22846679",
        "0x2678f4494237238e462fBd2e4795ca8C20cB62C8",
        "0x51B2802715e87C1Da6DE1F7DE71A9f71d828AaC9",
        "0xcff36B1aD7acbe3e4A58fb6E3018a107207FaF25",
        "0x10C6c0fbF28bE3fDddE6461Ae7597ceb4183E119",
        "0xf4e79E4ee06EF8F0aE1accAa8168C8F2edabfd29",
        "0xD1B4Ad71dc7655675E821c9A674ba570718f073f",
        "0x23EDB27d9EeF2b929A9F0711b7beBf577EDB896f",
        "0x4E44A2E9b1f933Dbe9C56aF4Deb696c56AD39E60",
        "0x269C5fa50116E3cb32e22a7542090e7c4221773D",
        "0x7e234E466d78610dED84Ebc6e13a850381f5f65C",
        "0xcBCafd529DB6754E8Ba210C3C37aa741031205CA",
        "0xB7Eaa446940662727B580952b3EbceeD7CDe7712",
        "0x0DE00214399206f5A76491927352910Db8EB62D1",
        "0xfA04dfb92aCDBF2f14aF8ab66f52E3D9520b6fDA",
        "0xd39F7889A524143F3a1e8090dcE4adf06757d2e7",
        "0x921D1dD2B45b3591d542370dC8Fc6AE670BE12Ab",
        "0x7de5aeE6DEBC5473f635f5115b67BE843B175774",
        "0x7aD52Ad973910FD19b217ff8A722D21BF4654f6E",
        "0xEcb0Cdc7dd1c5aDb7D523a58B2d82cA72D000A57",
        "0x84d2E366A58f94b4658866A720d57c63FEcdb5Ef",
        "0x4AB679f866Fb19176f84cF4E9A9De940058d2E47",
        "0x8C6E27f90A51bDe27343B626452c278EAdA144d3",
        "0x8C498Ef86Ac8b91A43dA403B2225b65Ed6B6b64D",
        "0x62e3ABccD2A0a290dD702e94653d95ce79CB1733",
        "0x5EdF60C9dC63EFA6b9CD41d0aed34eA1C7e7F603",
        "0xdC51c34B06979351E94b207D7eb8c6E158f6D941",
        "0x427893baBcf87B8c5274b708318855d884089c78",
        "0x0E6e7a92bF18AD2A95aE23252d570226853aa1c2",
        "0xc4C05C4C149fB54fB3064d4f5E2CF75B8bCfB889",
        "0x7f96E815247ef46111aB7c387bf7E967Ec50549a",
    ];

      for(i = 0; i < wallets.length; i++) {
        console.log( "Loading.." + wallets[i].toString() );
        await instance.awardBoosterCredits(wallets[i], 50);
        console.log(wallets[i] + " completed");
      };
};