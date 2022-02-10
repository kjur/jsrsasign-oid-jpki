var assert = require('assert');
var rs = require("jsrsasign");
require('../lib/index.js').addon(rs);

var oids = {
    "jpki":			"1.2.392.200149",
    "jpki-securityObject":	"1.2.392.200149.8",
    "jpki-pki":			"1.2.392.200149.8.5",

    "jpki-personalData":			"1.2.392.200149.8.5.5",
    "jpki-pd-commonName":			"1.2.392.200149.8.5.5.1",
    "jpki-pd-substituteCharacterOfCommonName":	"1.2.392.200149.8.5.5.2",
    "jpki-pd-gender":			   	"1.2.392.200149.8.5.5.3",
    "jpki-pd-dateOfBirth":			"1.2.392.200149.8.5.5.4",
    "jpki-pd-substituteCharacterOfAddress":	"1.2.392.200149.8.5.5.5",
    "jpki-pd-address":			   	"1.2.392.200149.8.5.5.6",

    "jpki-certificatePolicy":		"1.2.392.200149.8.5.1",
    "jpki-cp-digitalSignature":		"1.2.392.200149.8.5.1.1",
    "jpki-cp-sign-class20":		"1.2.392.200149.8.5.1.1.20",
    "jpki-cp-authenticate":		"1.2.392.200149.8.5.1.3",
    "jpki-cp-auth-class30":		"1.2.392.200149.8.5.1.3.30"
};

describe("JPKI OIDs", function() {
    describe("KJUR.asn1.x509.OID", function() {
	var OID = rs.KJUR.asn1.x509.OID;
	var name2oid = OID.name2oid;
	var equal = assert.equal;

        it('existing sha256', function() {
            equal("2.16.840.1.101.3.4.2.1", name2oid("sha256"));
        });

	for (var name in oids) {
	    it("name2oid " + name,
	       function() {equal(oids[name], OID.name2oid(name));});
	}

	for (var name in oids) {
	    it("oid2name " + name,
	       function() {equal(name, OID.oid2name(oids[name]));});
	}
    });
});
