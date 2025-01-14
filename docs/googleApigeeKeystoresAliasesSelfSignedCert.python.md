# `googleApigeeKeystoresAliasesSelfSignedCert` Submodule <a name="`googleApigeeKeystoresAliasesSelfSignedCert` Submodule" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeKeystoresAliasesSelfSignedCert <a name="GoogleApigeeKeystoresAliasesSelfSignedCert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  environment: str,
  keystore: str,
  org_id: str,
  sig_alg: str,
  subject: GoogleApigeeKeystoresAliasesSelfSignedCertSubject,
  cert_validity_in_days: typing.Union[int, float] = None,
  id: str = None,
  key_size: str = None,
  subject_alternative_dns_names: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames = None,
  timeouts: GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore">keystore</a></code> | <code>str</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg">sig_alg</a></code> | <code>str</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays">cert_validity_in_days</a></code> | <code>typing.Union[int, float]</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize">key_size</a></code> | <code>str</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias"></a>

- *Type:* str

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#alias GoogleApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment"></a>

- *Type:* str

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#environment GoogleApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore"></a>

- *Type:* str

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#keystore GoogleApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_id GoogleApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sig_alg`<sup>Required</sup> <a name="sig_alg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg"></a>

- *Type:* str

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#sig_alg GoogleApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject GoogleApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `cert_validity_in_days`<sup>Optional</sup> <a name="cert_validity_in_days" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays"></a>

- *Type:* typing.Union[int, float]

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#cert_validity_in_days GoogleApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize"></a>

- *Type:* str

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#key_size GoogleApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subject_alternative_dns_names`<sup>Optional</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#timeouts GoogleApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames">put_subject_alternative_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays">reset_cert_validity_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetKeySize">reset_key_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames">reset_subject_alternative_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subject` <a name="put_subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject"></a>

```python
def put_subject(
  common_name: str = None,
  country_code: str = None,
  email: str = None,
  locality: str = None,
  org: str = None,
  org_unit: str = None,
  state: str = None
) -> None
```

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.commonName"></a>

- *Type:* str

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#common_name GoogleApigeeKeystoresAliasesSelfSignedCert#common_name}

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.countryCode"></a>

- *Type:* str

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#country_code GoogleApigeeKeystoresAliasesSelfSignedCert#country_code}

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.email"></a>

- *Type:* str

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#email GoogleApigeeKeystoresAliasesSelfSignedCert#email}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.locality"></a>

- *Type:* str

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#locality GoogleApigeeKeystoresAliasesSelfSignedCert#locality}

---

###### `org`<sup>Optional</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.org"></a>

- *Type:* str

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org GoogleApigeeKeystoresAliasesSelfSignedCert#org}

---

###### `org_unit`<sup>Optional</sup> <a name="org_unit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.orgUnit"></a>

- *Type:* str

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_unit GoogleApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.state"></a>

- *Type:* str

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#state GoogleApigeeKeystoresAliasesSelfSignedCert#state}

---

##### `put_subject_alternative_dns_names` <a name="put_subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames"></a>

```python
def put_subject_alternative_dns_names(
  subject_alternative_name: str = None
) -> None
```

###### `subject_alternative_name`<sup>Optional</sup> <a name="subject_alternative_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames.parameter.subjectAlternativeName"></a>

- *Type:* str

Subject Alternative Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_name GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#create GoogleApigeeKeystoresAliasesSelfSignedCert#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#delete GoogleApigeeKeystoresAliasesSelfSignedCert#delete}.

---

##### `reset_cert_validity_in_days` <a name="reset_cert_validity_in_days" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays"></a>

```python
def reset_cert_validity_in_days() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetKeySize"></a>

```python
def reset_key_size() -> None
```

##### `reset_subject_alternative_dns_names` <a name="reset_subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames"></a>

```python
def reset_subject_alternative_dns_names() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeKeystoresAliasesSelfSignedCert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeKeystoresAliasesSelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeKeystoresAliasesSelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certsInfo">certs_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput">cert_validity_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput">key_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput">keystore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput">sig_alg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput">subject_alternative_dns_names_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectInput">subject_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays">cert_validity_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySize">key_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystore">keystore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlg">sig_alg</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certs_info`<sup>Required</sup> <a name="certs_info" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certsInfo"></a>

```python
certs_info: GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subject"></a>

```python
subject: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a>

---

##### `subject_alternative_dns_names`<sup>Required</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeouts"></a>

```python
timeouts: GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `cert_validity_in_days_input`<sup>Optional</sup> <a name="cert_validity_in_days_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput"></a>

```python
cert_validity_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput"></a>

```python
key_size_input: str
```

- *Type:* str

---

##### `keystore_input`<sup>Optional</sup> <a name="keystore_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput"></a>

```python
keystore_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `sig_alg_input`<sup>Optional</sup> <a name="sig_alg_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput"></a>

```python
sig_alg_input: str
```

- *Type:* str

---

##### `subject_alternative_dns_names_input`<sup>Optional</sup> <a name="subject_alternative_dns_names_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput"></a>

```python
subject_alternative_dns_names_input: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectInput"></a>

```python
subject_input: GoogleApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `cert_validity_in_days`<sup>Required</sup> <a name="cert_validity_in_days" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays"></a>

```python
cert_validity_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySize"></a>

```python
key_size: str
```

- *Type:* str

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `sig_alg`<sup>Required</sup> <a name="sig_alg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlg"></a>

```python
sig_alg: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo()
```


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo()
```


### GoogleApigeeKeystoresAliasesSelfSignedCertConfig <a name="GoogleApigeeKeystoresAliasesSelfSignedCertConfig" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  environment: str,
  keystore: str,
  org_id: str,
  sig_alg: str,
  subject: GoogleApigeeKeystoresAliasesSelfSignedCertSubject,
  cert_validity_in_days: typing.Union[int, float] = None,
  id: str = None,
  key_size: str = None,
  subject_alternative_dns_names: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames = None,
  timeouts: GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.alias">alias</a></code> | <code>str</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.environment">environment</a></code> | <code>str</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore">keystore</a></code> | <code>str</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg">sig_alg</a></code> | <code>str</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays">cert_validity_in_days</a></code> | <code>typing.Union[int, float]</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize">key_size</a></code> | <code>str</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#alias GoogleApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#environment GoogleApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#keystore GoogleApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_id GoogleApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sig_alg`<sup>Required</sup> <a name="sig_alg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg"></a>

```python
sig_alg: str
```

- *Type:* str

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#sig_alg GoogleApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subject"></a>

```python
subject: GoogleApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject GoogleApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `cert_validity_in_days`<sup>Optional</sup> <a name="cert_validity_in_days" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays"></a>

```python
cert_validity_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#cert_validity_in_days GoogleApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize"></a>

```python
key_size: str
```

- *Type:* str

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#key_size GoogleApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subject_alternative_dns_names`<sup>Optional</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#timeouts GoogleApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

### GoogleApigeeKeystoresAliasesSelfSignedCertSubject <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject(
  common_name: str = None,
  country_code: str = None,
  email: str = None,
  locality: str = None,
  org: str = None,
  org_unit: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName">common_name</a></code> | <code>str</code> | Common name of the organization. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode">country_code</a></code> | <code>str</code> | Two-letter country code. Example, IN for India, US for United States of America. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.email">email</a></code> | <code>str</code> | Email address. Max 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.locality">locality</a></code> | <code>str</code> | City or town name. Maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.org">org</a></code> | <code>str</code> | Organization name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit">org_unit</a></code> | <code>str</code> | Organization team name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.state">state</a></code> | <code>str</code> | State or district name. Maximum length is 128 characters. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#common_name GoogleApigeeKeystoresAliasesSelfSignedCert#common_name}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#country_code GoogleApigeeKeystoresAliasesSelfSignedCert#country_code}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.email"></a>

```python
email: str
```

- *Type:* str

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#email GoogleApigeeKeystoresAliasesSelfSignedCert#email}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#locality GoogleApigeeKeystoresAliasesSelfSignedCert#locality}

---

##### `org`<sup>Optional</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.org"></a>

```python
org: str
```

- *Type:* str

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org GoogleApigeeKeystoresAliasesSelfSignedCert#org}

---

##### `org_unit`<sup>Optional</sup> <a name="org_unit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit"></a>

```python
org_unit: str
```

- *Type:* str

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_unit GoogleApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.state"></a>

```python
state: str
```

- *Type:* str

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#state GoogleApigeeKeystoresAliasesSelfSignedCert#state}

---

### GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames(
  subject_alternative_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName">subject_alternative_name</a></code> | <code>str</code> | Subject Alternative Name. |

---

##### `subject_alternative_name`<sup>Optional</sup> <a name="subject_alternative_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName"></a>

```python
subject_alternative_name: str
```

- *Type:* str

Subject Alternative Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_name GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

### GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts <a name="GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#create GoogleApigeeKeystoresAliasesSelfSignedCert#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#delete GoogleApigeeKeystoresAliasesSelfSignedCert#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#create GoogleApigeeKeystoresAliasesSelfSignedCert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#delete GoogleApigeeKeystoresAliasesSelfSignedCert#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints">basic_constraints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate">expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid">is_valid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName">sig_alg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom">valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_constraints`<sup>Required</sup> <a name="basic_constraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```python
basic_constraints: str
```

- *Type:* str

---

##### `expiry_date`<sup>Required</sup> <a name="expiry_date" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```python
expiry_date: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid"></a>

```python
is_valid: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `sig_alg_name`<sup>Required</sup> <a name="sig_alg_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```python
sig_alg_name: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_from`<sup>Required</sup> <a name="valid_from" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo">cert_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_info`<sup>Required</sup> <a name="cert_info" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo"></a>

```python
cert_info: GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName">reset_subject_alternative_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subject_alternative_name` <a name="reset_subject_alternative_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName"></a>

```python
def reset_subject_alternative_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput">subject_alternative_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName">subject_alternative_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternative_name_input`<sup>Optional</sup> <a name="subject_alternative_name_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput"></a>

```python
subject_alternative_name_input: str
```

- *Type:* str

---

##### `subject_alternative_name`<sup>Required</sup> <a name="subject_alternative_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName"></a>

```python
subject_alternative_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg">reset_org</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit">reset_org_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_org` <a name="reset_org" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg"></a>

```python
def reset_org() -> None
```

##### `reset_org_unit` <a name="reset_org_unit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit"></a>

```python
def reset_org_unit() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput">org_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput">org_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org">org</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit">org_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `org_input`<sup>Optional</sup> <a name="org_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput"></a>

```python
org_input: str
```

- *Type:* str

---

##### `org_unit_input`<sup>Optional</sup> <a name="org_unit_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput"></a>

```python
org_unit_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org"></a>

```python
org: str
```

- *Type:* str

---

##### `org_unit`<sup>Required</sup> <a name="org_unit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit"></a>

```python
org_unit: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_keystores_aliases_self_signed_cert

googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]

---



