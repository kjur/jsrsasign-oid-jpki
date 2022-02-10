var oids = {
    "jpki":			"1.2.392.200149",
    "jpki-securityObject":	"1.2.392.200149.8",
    "jpki-pki":			"1.2.392.200149.8.5",

    "jpki-personalData":			"1.2.392.200149.8.5.5",
    "jpki-pd-commonName":			"1.2.392.200149.8.5.5.1",
    "jpki-pd-substituteCharacterOfCommonName":	"1.2.392.200149.8.5.5.2",
    "jpki-pd-gender":			   	"1.2.392.200149.8.5.5.3",
    "jpki-pd-dateOfBirth":			"1.2.392.200149.8.5.5.4",
    "jpki-pd-address":			   	"1.2.392.200149.8.5.5.5",
    "jpki-pd-substituteCharacterOfAddress":	"1.2.392.200149.8.5.5.6",

    "jpki-certificatePolicy":		"1.2.392.200149.8.5.1",
    "jpki-cp-digitalSignature":		"1.2.392.200149.8.5.1.1",
    "jpki-cp-sign-class20":		"1.2.392.200149.8.5.1.1.20",
    "jpki-cp-authenticate":		"1.2.392.200149.8.5.1.3",
    "jpki-cp-auth-class30":		"1.2.392.200149.8.5.1.3.30"
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
