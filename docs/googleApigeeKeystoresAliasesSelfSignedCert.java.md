# `googleApigeeKeystoresAliasesSelfSignedCert` Submodule <a name="`googleApigeeKeystoresAliasesSelfSignedCert` Submodule" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeKeystoresAliasesSelfSignedCert <a name="GoogleApigeeKeystoresAliasesSelfSignedCert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCert;

GoogleApigeeKeystoresAliasesSelfSignedCert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .alias(java.lang.String)
    .environment(java.lang.String)
    .keystore(java.lang.String)
    .orgId(java.lang.String)
    .sigAlg(java.lang.String)
    .subject(GoogleApigeeKeystoresAliasesSelfSignedCertSubject)
//  .certValidityInDays(java.lang.Number)
//  .id(java.lang.String)
//  .keySize(java.lang.String)
//  .subjectAlternativeDnsNames(GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames)
//  .timeouts(GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore">keystore</a></code> | <code>java.lang.String</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg">sigAlg</a></code> | <code>java.lang.String</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays">certValidityInDays</a></code> | <code>java.lang.Number</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize">keySize</a></code> | <code>java.lang.String</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#alias GoogleApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#environment GoogleApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore"></a>

- *Type:* java.lang.String

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#keystore GoogleApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_id GoogleApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sigAlg`<sup>Required</sup> <a name="sigAlg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg"></a>

- *Type:* java.lang.String

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#sig_alg GoogleApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject GoogleApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `certValidityInDays`<sup>Optional</sup> <a name="certValidityInDays" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays"></a>

- *Type:* java.lang.Number

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#cert_validity_in_days GoogleApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize"></a>

- *Type:* java.lang.String

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#key_size GoogleApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subjectAlternativeDnsNames`<sup>Optional</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#timeouts GoogleApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames">putSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays">resetCertValidityInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames">resetSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject"></a>

```java
public void putSubject(GoogleApigeeKeystoresAliasesSelfSignedCertSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `putSubjectAlternativeDnsNames` <a name="putSubjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames"></a>

```java
public void putSubjectAlternativeDnsNames(GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---

##### `resetCertValidityInDays` <a name="resetCertValidityInDays" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays"></a>

```java
public void resetCertValidityInDays()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetId"></a>

```java
public void resetId()
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetKeySize"></a>

```java
public void resetKeySize()
```

##### `resetSubjectAlternativeDnsNames` <a name="resetSubjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames"></a>

```java
public void resetSubjectAlternativeDnsNames()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCert;

GoogleApigeeKeystoresAliasesSelfSignedCert.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCert;

GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCert;

GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCert;

GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeKeystoresAliasesSelfSignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeKeystoresAliasesSelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeKeystoresAliasesSelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certsInfo">certsInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput">certValidityInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput">keySizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput">keystoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput">sigAlgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput">subjectAlternativeDnsNamesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays">certValidityInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySize">keySize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystore">keystore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlg">sigAlg</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certsInfo`<sup>Required</sup> <a name="certsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certsInfo"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList getCertsInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subject"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a>

---

##### `subjectAlternativeDnsNames`<sup>Required</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference getSubjectAlternativeDnsNames();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeouts"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `certValidityInDaysInput`<sup>Optional</sup> <a name="certValidityInDaysInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput"></a>

```java
public java.lang.Number getCertValidityInDaysInput();
```

- *Type:* java.lang.Number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput"></a>

```java
public java.lang.String getKeySizeInput();
```

- *Type:* java.lang.String

---

##### `keystoreInput`<sup>Optional</sup> <a name="keystoreInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput"></a>

```java
public java.lang.String getKeystoreInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `sigAlgInput`<sup>Optional</sup> <a name="sigAlgInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput"></a>

```java
public java.lang.String getSigAlgInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeDnsNamesInput`<sup>Optional</sup> <a name="subjectAlternativeDnsNamesInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames getSubjectAlternativeDnsNamesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.subjectInput"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubject getSubjectInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `certValidityInDays`<sup>Required</sup> <a name="certValidityInDays" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays"></a>

```java
public java.lang.Number getCertValidityInDays();
```

- *Type:* java.lang.Number

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keySize"></a>

```java
public java.lang.String getKeySize();
```

- *Type:* java.lang.String

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.keystore"></a>

```java
public java.lang.String getKeystore();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `sigAlg`<sup>Required</sup> <a name="sigAlg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.sigAlg"></a>

```java
public java.lang.String getSigAlg();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo;

GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo.builder()
    .build();
```


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo;

GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.builder()
    .build();
```


### GoogleApigeeKeystoresAliasesSelfSignedCertConfig <a name="GoogleApigeeKeystoresAliasesSelfSignedCertConfig" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig;

GoogleApigeeKeystoresAliasesSelfSignedCertConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .alias(java.lang.String)
    .environment(java.lang.String)
    .keystore(java.lang.String)
    .orgId(java.lang.String)
    .sigAlg(java.lang.String)
    .subject(GoogleApigeeKeystoresAliasesSelfSignedCertSubject)
//  .certValidityInDays(java.lang.Number)
//  .id(java.lang.String)
//  .keySize(java.lang.String)
//  .subjectAlternativeDnsNames(GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames)
//  .timeouts(GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore">keystore</a></code> | <code>java.lang.String</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg">sigAlg</a></code> | <code>java.lang.String</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays">certValidityInDays</a></code> | <code>java.lang.Number</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize">keySize</a></code> | <code>java.lang.String</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#alias GoogleApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#environment GoogleApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore"></a>

```java
public java.lang.String getKeystore();
```

- *Type:* java.lang.String

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#keystore GoogleApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_id GoogleApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sigAlg`<sup>Required</sup> <a name="sigAlg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg"></a>

```java
public java.lang.String getSigAlg();
```

- *Type:* java.lang.String

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#sig_alg GoogleApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subject"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubject getSubject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject GoogleApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `certValidityInDays`<sup>Optional</sup> <a name="certValidityInDays" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays"></a>

```java
public java.lang.Number getCertValidityInDays();
```

- *Type:* java.lang.Number

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#cert_validity_in_days GoogleApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#id GoogleApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize"></a>

```java
public java.lang.String getKeySize();
```

- *Type:* java.lang.String

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#key_size GoogleApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subjectAlternativeDnsNames`<sup>Optional</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames getSubjectAlternativeDnsNames();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#timeouts GoogleApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

### GoogleApigeeKeystoresAliasesSelfSignedCertSubject <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject;

GoogleApigeeKeystoresAliasesSelfSignedCertSubject.builder()
//  .commonName(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .locality(java.lang.String)
//  .org(java.lang.String)
//  .orgUnit(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Common name of the organization. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Two-letter country code. Example, IN for India, US for United States of America. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.email">email</a></code> | <code>java.lang.String</code> | Email address. Max 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.locality">locality</a></code> | <code>java.lang.String</code> | City or town name. Maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.org">org</a></code> | <code>java.lang.String</code> | Organization name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | Organization team name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.state">state</a></code> | <code>java.lang.String</code> | State or district name. Maximum length is 128 characters. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#common_name GoogleApigeeKeystoresAliasesSelfSignedCert#common_name}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#country_code GoogleApigeeKeystoresAliasesSelfSignedCert#country_code}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#email GoogleApigeeKeystoresAliasesSelfSignedCert#email}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#locality GoogleApigeeKeystoresAliasesSelfSignedCert#locality}

---

##### `org`<sup>Optional</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.org"></a>

```java
public java.lang.String getOrg();
```

- *Type:* java.lang.String

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org GoogleApigeeKeystoresAliasesSelfSignedCert#org}

---

##### `orgUnit`<sup>Optional</sup> <a name="orgUnit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#org_unit GoogleApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#state GoogleApigeeKeystoresAliasesSelfSignedCert#state}

---

### GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.builder()
//  .subjectAlternativeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName">subjectAlternativeName</a></code> | <code>java.lang.String</code> | Subject Alternative Name. |

---

##### `subjectAlternativeName`<sup>Optional</sup> <a name="subjectAlternativeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName"></a>

```java
public java.lang.String getSubjectAlternativeName();
```

- *Type:* java.lang.String

Subject Alternative Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#subject_alternative_name GoogleApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

### GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts <a name="GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts;

GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#create GoogleApigeeKeystoresAliasesSelfSignedCert#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#delete GoogleApigeeKeystoresAliasesSelfSignedCert#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#create GoogleApigeeKeystoresAliasesSelfSignedCert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_self_signed_cert#delete GoogleApigeeKeystoresAliasesSelfSignedCert#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList;

new GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference;

new GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints">basicConstraints</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid">isValid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName">sigAlgName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicConstraints`<sup>Required</sup> <a name="basicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```java
public java.lang.String getBasicConstraints();
```

- *Type:* java.lang.String

---

##### `expiryDate`<sup>Required</sup> <a name="expiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```java
public java.lang.String getExpiryDate();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid"></a>

```java
public java.lang.String getIsValid();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `sigAlgName`<sup>Required</sup> <a name="sigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```java
public java.lang.String getSigAlgName();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList;

new GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference;

new GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo">certInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInfo`<sup>Required</sup> <a name="certInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList getCertInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo">GoogleApigeeKeystoresAliasesSelfSignedCertCertsInfo</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference;

new GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName">resetSubjectAlternativeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubjectAlternativeName` <a name="resetSubjectAlternativeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName"></a>

```java
public void resetSubjectAlternativeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput">subjectAlternativeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName">subjectAlternativeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNameInput`<sup>Optional</sup> <a name="subjectAlternativeNameInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput"></a>

```java
public java.lang.String getSubjectAlternativeNameInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeName`<sup>Required</sup> <a name="subjectAlternativeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName"></a>

```java
public java.lang.String getSubjectAlternativeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">GoogleApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference;

new GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg">resetOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit">resetOrgUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrg` <a name="resetOrg" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg"></a>

```java
public void resetOrg()
```

##### `resetOrgUnit` <a name="resetOrgUnit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit"></a>

```java
public void resetOrgUnit()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput">orgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput">orgUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org">org</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `orgInput`<sup>Optional</sup> <a name="orgInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput"></a>

```java
public java.lang.String getOrgInput();
```

- *Type:* java.lang.String

---

##### `orgUnitInput`<sup>Optional</sup> <a name="orgUnitInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput"></a>

```java
public java.lang.String getOrgUnitInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org"></a>

```java
public java.lang.String getOrg();
```

- *Type:* java.lang.String

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue"></a>

```java
public GoogleApigeeKeystoresAliasesSelfSignedCertSubject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertSubject">GoogleApigeeKeystoresAliasesSelfSignedCertSubject</a>

---


### GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference <a name="GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_self_signed_cert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference;

new GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesSelfSignedCert.GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts">GoogleApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---



