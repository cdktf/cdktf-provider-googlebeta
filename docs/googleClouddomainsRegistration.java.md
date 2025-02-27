# `googleClouddomainsRegistration` Submodule <a name="`googleClouddomainsRegistration` Submodule" id="@cdktf/provider-google-beta.googleClouddomainsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddomainsRegistration <a name="GoogleClouddomainsRegistration" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration google_clouddomains_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistration;

GoogleClouddomainsRegistration.Builder.create(Construct scope, java.lang.String id)
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
    .contactSettings(GoogleClouddomainsRegistrationContactSettings)
    .domainName(java.lang.String)
    .location(java.lang.String)
    .yearlyPrice(GoogleClouddomainsRegistrationYearlyPrice)
//  .contactNotices(java.util.List<java.lang.String>)
//  .dnsSettings(GoogleClouddomainsRegistrationDnsSettings)
//  .domainNotices(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .managementSettings(GoogleClouddomainsRegistrationManagementSettings)
//  .project(java.lang.String)
//  .timeouts(GoogleClouddomainsRegistrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.contactSettings">contactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.yearlyPrice">yearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.contactNotices">contactNotices</a></code> | <code>java.util.List<java.lang.String></code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.domainNotices">domainNotices</a></code> | <code>java.util.List<java.lang.String></code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.managementSettings">managementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactSettings`<sup>Required</sup> <a name="contactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.contactSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#contact_settings GoogleClouddomainsRegistration#contact_settings}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#domain_name GoogleClouddomainsRegistration#domain_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#location GoogleClouddomainsRegistration#location}

---

##### `yearlyPrice`<sup>Required</sup> <a name="yearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.yearlyPrice"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#yearly_price GoogleClouddomainsRegistration#yearly_price}

---

##### `contactNotices`<sup>Optional</sup> <a name="contactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.contactNotices"></a>

- *Type:* java.util.List<java.lang.String>

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#contact_notices GoogleClouddomainsRegistration#contact_notices}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.dnsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#dns_settings GoogleClouddomainsRegistration#dns_settings}

---

##### `domainNotices`<sup>Optional</sup> <a name="domainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.domainNotices"></a>

- *Type:* java.util.List<java.lang.String>

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#domain_notices GoogleClouddomainsRegistration#domain_notices}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#labels GoogleClouddomainsRegistration#labels}

---

##### `managementSettings`<sup>Optional</sup> <a name="managementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.managementSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#management_settings GoogleClouddomainsRegistration#management_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#timeouts GoogleClouddomainsRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings">putContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings">putDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings">putManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice">putYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetContactNotices">resetContactNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDnsSettings">resetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDomainNotices">resetDomainNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetManagementSettings">resetManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContactSettings` <a name="putContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings"></a>

```java
public void putContactSettings(GoogleClouddomainsRegistrationContactSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---

##### `putDnsSettings` <a name="putDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings"></a>

```java
public void putDnsSettings(GoogleClouddomainsRegistrationDnsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---

##### `putManagementSettings` <a name="putManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings"></a>

```java
public void putManagementSettings(GoogleClouddomainsRegistrationManagementSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts"></a>

```java
public void putTimeouts(GoogleClouddomainsRegistrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

---

##### `putYearlyPrice` <a name="putYearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice"></a>

```java
public void putYearlyPrice(GoogleClouddomainsRegistrationYearlyPrice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---

##### `resetContactNotices` <a name="resetContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetContactNotices"></a>

```java
public void resetContactNotices()
```

##### `resetDnsSettings` <a name="resetDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDnsSettings"></a>

```java
public void resetDnsSettings()
```

##### `resetDomainNotices` <a name="resetDomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDomainNotices"></a>

```java
public void resetDomainNotices()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetManagementSettings` <a name="resetManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetManagementSettings"></a>

```java
public void resetManagementSettings()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddomainsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistration;

GoogleClouddomainsRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistration;

GoogleClouddomainsRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistration;

GoogleClouddomainsRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistration;

GoogleClouddomainsRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleClouddomainsRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleClouddomainsRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleClouddomainsRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleClouddomainsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddomainsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettings">contactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference">GoogleClouddomainsRegistrationContactSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference">GoogleClouddomainsRegistrationDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.issues">issues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettings">managementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference">GoogleClouddomainsRegistrationManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.registerFailureReason">registerFailureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.supportedPrivacy">supportedPrivacy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference">GoogleClouddomainsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPrice">yearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference">GoogleClouddomainsRegistrationYearlyPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNoticesInput">contactNoticesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettingsInput">contactSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettingsInput">dnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNoticesInput">domainNoticesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettingsInput">managementSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPriceInput">yearlyPriceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNotices">contactNotices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNotices">domainNotices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactSettings`<sup>Required</sup> <a name="contactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettings"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsOutputReference getContactSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference">GoogleClouddomainsRegistrationContactSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dnsSettings`<sup>Required</sup> <a name="dnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettings"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsOutputReference getDnsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference">GoogleClouddomainsRegistrationDnsSettingsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.issues"></a>

```java
public java.util.List<java.lang.String> getIssues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managementSettings`<sup>Required</sup> <a name="managementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettings"></a>

```java
public GoogleClouddomainsRegistrationManagementSettingsOutputReference getManagementSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference">GoogleClouddomainsRegistrationManagementSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registerFailureReason`<sup>Required</sup> <a name="registerFailureReason" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.registerFailureReason"></a>

```java
public java.lang.String getRegisterFailureReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedPrivacy`<sup>Required</sup> <a name="supportedPrivacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.supportedPrivacy"></a>

```java
public java.util.List<java.lang.String> getSupportedPrivacy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeouts"></a>

```java
public GoogleClouddomainsRegistrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference">GoogleClouddomainsRegistrationTimeoutsOutputReference</a>

---

##### `yearlyPrice`<sup>Required</sup> <a name="yearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPrice"></a>

```java
public GoogleClouddomainsRegistrationYearlyPriceOutputReference getYearlyPrice();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference">GoogleClouddomainsRegistrationYearlyPriceOutputReference</a>

---

##### `contactNoticesInput`<sup>Optional</sup> <a name="contactNoticesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNoticesInput"></a>

```java
public java.util.List<java.lang.String> getContactNoticesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contactSettingsInput`<sup>Optional</sup> <a name="contactSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettingsInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettings getContactSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---

##### `dnsSettingsInput`<sup>Optional</sup> <a name="dnsSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettingsInput"></a>

```java
public GoogleClouddomainsRegistrationDnsSettings getDnsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainNoticesInput`<sup>Optional</sup> <a name="domainNoticesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNoticesInput"></a>

```java
public java.util.List<java.lang.String> getDomainNoticesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementSettingsInput`<sup>Optional</sup> <a name="managementSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettingsInput"></a>

```java
public GoogleClouddomainsRegistrationManagementSettings getManagementSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

---

##### `yearlyPriceInput`<sup>Optional</sup> <a name="yearlyPriceInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPriceInput"></a>

```java
public GoogleClouddomainsRegistrationYearlyPrice getYearlyPriceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---

##### `contactNotices`<sup>Required</sup> <a name="contactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNotices"></a>

```java
public java.util.List<java.lang.String> getContactNotices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainNotices`<sup>Required</sup> <a name="domainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNotices"></a>

```java
public java.util.List<java.lang.String> getDomainNotices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddomainsRegistrationConfig <a name="GoogleClouddomainsRegistrationConfig" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationConfig;

GoogleClouddomainsRegistrationConfig.builder()
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
    .contactSettings(GoogleClouddomainsRegistrationContactSettings)
    .domainName(java.lang.String)
    .location(java.lang.String)
    .yearlyPrice(GoogleClouddomainsRegistrationYearlyPrice)
//  .contactNotices(java.util.List<java.lang.String>)
//  .dnsSettings(GoogleClouddomainsRegistrationDnsSettings)
//  .domainNotices(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .managementSettings(GoogleClouddomainsRegistrationManagementSettings)
//  .project(java.lang.String)
//  .timeouts(GoogleClouddomainsRegistrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactSettings">contactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.yearlyPrice">yearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactNotices">contactNotices</a></code> | <code>java.util.List<java.lang.String></code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainNotices">domainNotices</a></code> | <code>java.util.List<java.lang.String></code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.managementSettings">managementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactSettings`<sup>Required</sup> <a name="contactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactSettings"></a>

```java
public GoogleClouddomainsRegistrationContactSettings getContactSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#contact_settings GoogleClouddomainsRegistration#contact_settings}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#domain_name GoogleClouddomainsRegistration#domain_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#location GoogleClouddomainsRegistration#location}

---

##### `yearlyPrice`<sup>Required</sup> <a name="yearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.yearlyPrice"></a>

```java
public GoogleClouddomainsRegistrationYearlyPrice getYearlyPrice();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#yearly_price GoogleClouddomainsRegistration#yearly_price}

---

##### `contactNotices`<sup>Optional</sup> <a name="contactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactNotices"></a>

```java
public java.util.List<java.lang.String> getContactNotices();
```

- *Type:* java.util.List<java.lang.String>

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#contact_notices GoogleClouddomainsRegistration#contact_notices}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dnsSettings"></a>

```java
public GoogleClouddomainsRegistrationDnsSettings getDnsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#dns_settings GoogleClouddomainsRegistration#dns_settings}

---

##### `domainNotices`<sup>Optional</sup> <a name="domainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainNotices"></a>

```java
public java.util.List<java.lang.String> getDomainNotices();
```

- *Type:* java.util.List<java.lang.String>

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#domain_notices GoogleClouddomainsRegistration#domain_notices}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#labels GoogleClouddomainsRegistration#labels}

---

##### `managementSettings`<sup>Optional</sup> <a name="managementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.managementSettings"></a>

```java
public GoogleClouddomainsRegistrationManagementSettings getManagementSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#management_settings GoogleClouddomainsRegistration#management_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.timeouts"></a>

```java
public GoogleClouddomainsRegistrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#timeouts GoogleClouddomainsRegistration#timeouts}

---

### GoogleClouddomainsRegistrationContactSettings <a name="GoogleClouddomainsRegistrationContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettings;

GoogleClouddomainsRegistrationContactSettings.builder()
    .adminContact(GoogleClouddomainsRegistrationContactSettingsAdminContact)
    .privacy(java.lang.String)
    .registrantContact(GoogleClouddomainsRegistrationContactSettingsRegistrantContact)
    .technicalContact(GoogleClouddomainsRegistrationContactSettingsTechnicalContact)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.privacy">privacy</a></code> | <code>java.lang.String</code> | Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.technicalContact">technicalContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | technical_contact block. |

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.adminContact"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContact getAdminContact();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#admin_contact GoogleClouddomainsRegistration#admin_contact}

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.privacy"></a>

```java
public java.lang.String getPrivacy();
```

- *Type:* java.lang.String

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#privacy GoogleClouddomainsRegistration#privacy}

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.registrantContact"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContact getRegistrantContact();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#registrant_contact GoogleClouddomainsRegistration#registrant_contact}

---

##### `technicalContact`<sup>Required</sup> <a name="technicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.technicalContact"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContact getTechnicalContact();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#technical_contact GoogleClouddomainsRegistration#technical_contact}

---

### GoogleClouddomainsRegistrationContactSettingsAdminContact <a name="GoogleClouddomainsRegistrationContactSettingsAdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsAdminContact;

GoogleClouddomainsRegistrationContactSettingsAdminContact.builder()
    .email(java.lang.String)
    .phoneNumber(java.lang.String)
    .postalAddress(GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress)
//  .faxNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress getPostalAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress;

GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.builder()
    .regionCode(java.lang.String)
//  .addressLines(java.util.List<java.lang.String>)
//  .administrativeArea(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .postalCode(java.lang.String)
//  .recipients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode">regionCode</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines">addressLines</a></code> | <code>java.util.List<java.lang.String></code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea">administrativeArea</a></code> | <code>java.lang.String</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality">locality</a></code> | <code>java.lang.String</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization">organization</a></code> | <code>java.lang.String</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | The recipient at the address. |

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode"></a>

```java
public java.lang.String getRegionCode();
```

- *Type:* java.lang.String

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `addressLines`<sup>Optional</sup> <a name="addressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines"></a>

```java
public java.util.List<java.lang.String> getAddressLines();
```

- *Type:* java.util.List<java.lang.String>

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `administrativeArea`<sup>Optional</sup> <a name="administrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea"></a>

```java
public java.lang.String getAdministrativeArea();
```

- *Type:* java.lang.String

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationContactSettingsRegistrantContact <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact;

GoogleClouddomainsRegistrationContactSettingsRegistrantContact.builder()
    .email(java.lang.String)
    .phoneNumber(java.lang.String)
    .postalAddress(GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress)
//  .faxNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress getPostalAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress;

GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.builder()
    .regionCode(java.lang.String)
//  .addressLines(java.util.List<java.lang.String>)
//  .administrativeArea(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .postalCode(java.lang.String)
//  .recipients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode">regionCode</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines">addressLines</a></code> | <code>java.util.List<java.lang.String></code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea">administrativeArea</a></code> | <code>java.lang.String</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality">locality</a></code> | <code>java.lang.String</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization">organization</a></code> | <code>java.lang.String</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | The recipient at the address. |

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode"></a>

```java
public java.lang.String getRegionCode();
```

- *Type:* java.lang.String

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `addressLines`<sup>Optional</sup> <a name="addressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines"></a>

```java
public java.util.List<java.lang.String> getAddressLines();
```

- *Type:* java.util.List<java.lang.String>

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `administrativeArea`<sup>Optional</sup> <a name="administrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea"></a>

```java
public java.lang.String getAdministrativeArea();
```

- *Type:* java.lang.String

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationContactSettingsTechnicalContact <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact;

GoogleClouddomainsRegistrationContactSettingsTechnicalContact.builder()
    .email(java.lang.String)
    .phoneNumber(java.lang.String)
    .postalAddress(GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress)
//  .faxNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress getPostalAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress;

GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.builder()
    .regionCode(java.lang.String)
//  .addressLines(java.util.List<java.lang.String>)
//  .administrativeArea(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .postalCode(java.lang.String)
//  .recipients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode">regionCode</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines">addressLines</a></code> | <code>java.util.List<java.lang.String></code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea">administrativeArea</a></code> | <code>java.lang.String</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality">locality</a></code> | <code>java.lang.String</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization">organization</a></code> | <code>java.lang.String</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | The recipient at the address. |

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode"></a>

```java
public java.lang.String getRegionCode();
```

- *Type:* java.lang.String

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `addressLines`<sup>Optional</sup> <a name="addressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines"></a>

```java
public java.util.List<java.lang.String> getAddressLines();
```

- *Type:* java.util.List<java.lang.String>

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `administrativeArea`<sup>Optional</sup> <a name="administrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea"></a>

```java
public java.lang.String getAdministrativeArea();
```

- *Type:* java.lang.String

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationDnsSettings <a name="GoogleClouddomainsRegistrationDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettings;

GoogleClouddomainsRegistrationDnsSettings.builder()
//  .customDns(GoogleClouddomainsRegistrationDnsSettingsCustomDns)
//  .glueRecords(IResolvable)
//  .glueRecords(java.util.List<GoogleClouddomainsRegistrationDnsSettingsGlueRecords>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.customDns">customDns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | custom_dns block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.glueRecords">glueRecords</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>></code> | glue_records block. |

---

##### `customDns`<sup>Optional</sup> <a name="customDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.customDns"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsCustomDns getCustomDns();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#custom_dns GoogleClouddomainsRegistration#custom_dns}

---

##### `glueRecords`<sup>Optional</sup> <a name="glueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.glueRecords"></a>

```java
public java.lang.Object getGlueRecords();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>>

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#glue_records GoogleClouddomainsRegistration#glue_records}

---

### GoogleClouddomainsRegistrationDnsSettingsCustomDns <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsCustomDns;

GoogleClouddomainsRegistrationDnsSettingsCustomDns.builder()
    .nameServers(java.util.List<java.lang.String>)
//  .dsRecords(IResolvable)
//  .dsRecords(java.util.List<GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords">dsRecords</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>></code> | ds_records block. |

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#name_servers GoogleClouddomainsRegistration#name_servers}

---

##### `dsRecords`<sup>Optional</sup> <a name="dsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords"></a>

```java
public java.lang.Object getDsRecords();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>>

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#ds_records GoogleClouddomainsRegistration#ds_records}

---

### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords;

GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.builder()
//  .algorithm(java.lang.String)
//  .digest(java.lang.String)
//  .digestType(java.lang.String)
//  .keyTag(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm used to generate the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest">digest</a></code> | <code>java.lang.String</code> | The digest generated from the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType">digestType</a></code> | <code>java.lang.String</code> | The hash function used to generate the digest of the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | The key tag of the record. Must be set in range 0 -- 65535. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm used to generate the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#algorithm GoogleClouddomainsRegistration#algorithm}

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

The digest generated from the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#digest GoogleClouddomainsRegistration#digest}

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType"></a>

```java
public java.lang.String getDigestType();
```

- *Type:* java.lang.String

The hash function used to generate the digest of the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#digest_type GoogleClouddomainsRegistration#digest_type}

---

##### `keyTag`<sup>Optional</sup> <a name="keyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

The key tag of the record. Must be set in range 0 -- 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#key_tag GoogleClouddomainsRegistration#key_tag}

---

### GoogleClouddomainsRegistrationDnsSettingsGlueRecords <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords;

GoogleClouddomainsRegistrationDnsSettingsGlueRecords.builder()
    .hostName(java.lang.String)
//  .ipv4Addresses(java.util.List<java.lang.String>)
//  .ipv6Addresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Required. Domain name of the host in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Required. Domain name of the host in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#host_name GoogleClouddomainsRegistration#host_name}

---

##### `ipv4Addresses`<sup>Optional</sup> <a name="ipv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#ipv4_addresses GoogleClouddomainsRegistration#ipv4_addresses}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#ipv6_addresses GoogleClouddomainsRegistration#ipv6_addresses}

---

### GoogleClouddomainsRegistrationManagementSettings <a name="GoogleClouddomainsRegistrationManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationManagementSettings;

GoogleClouddomainsRegistrationManagementSettings.builder()
//  .preferredRenewalMethod(java.lang.String)
//  .transferLockState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod">preferredRenewalMethod</a></code> | <code>java.lang.String</code> | The desired renewal method for this Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.transferLockState">transferLockState</a></code> | <code>java.lang.String</code> | Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED. |

---

##### `preferredRenewalMethod`<sup>Optional</sup> <a name="preferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod"></a>

```java
public java.lang.String getPreferredRenewalMethod();
```

- *Type:* java.lang.String

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#preferred_renewal_method GoogleClouddomainsRegistration#preferred_renewal_method}

---

##### `transferLockState`<sup>Optional</sup> <a name="transferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.transferLockState"></a>

```java
public java.lang.String getTransferLockState();
```

- *Type:* java.lang.String

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#transfer_lock_state GoogleClouddomainsRegistration#transfer_lock_state}

---

### GoogleClouddomainsRegistrationTimeouts <a name="GoogleClouddomainsRegistrationTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationTimeouts;

GoogleClouddomainsRegistrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#create GoogleClouddomainsRegistration#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#delete GoogleClouddomainsRegistration#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#update GoogleClouddomainsRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#create GoogleClouddomainsRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#delete GoogleClouddomainsRegistration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#update GoogleClouddomainsRegistration#update}.

---

### GoogleClouddomainsRegistrationYearlyPrice <a name="GoogleClouddomainsRegistrationYearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationYearlyPrice;

GoogleClouddomainsRegistrationYearlyPrice.builder()
//  .currencyCode(java.lang.String)
//  .units(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | The three-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.units">units</a></code> | <code>java.lang.String</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#currency_code GoogleClouddomainsRegistration#currency_code}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#units GoogleClouddomainsRegistration#units}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference;

new GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress">putPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostalAddress` <a name="putPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress"></a>

```java
public void putPostalAddress(GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber"></a>

```java
public void resetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput">faxNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput">postalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference getPostalAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput"></a>

```java
public java.lang.String getFaxNumberInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress getPostalAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContact getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference;

new GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines">resetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea">resetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLines` <a name="resetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines"></a>

```java
public void resetAddressLines()
```

##### `resetAdministrativeArea` <a name="resetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```java
public void resetAdministrativeArea()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients"></a>

```java
public void resetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput">addressLinesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput">administrativeAreaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput">regionCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines">addressLines</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea">administrativeArea</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode">regionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLinesInput`<sup>Optional</sup> <a name="addressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput"></a>

```java
public java.util.List<java.lang.String> getAddressLinesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `administrativeAreaInput`<sup>Optional</sup> <a name="administrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```java
public java.lang.String getAdministrativeAreaInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput"></a>

```java
public java.util.List<java.lang.String> getRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodeInput`<sup>Optional</sup> <a name="regionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput"></a>

```java
public java.lang.String getRegionCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLines`<sup>Required</sup> <a name="addressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines"></a>

```java
public java.util.List<java.lang.String> getAddressLines();
```

- *Type:* java.util.List<java.lang.String>

---

##### `administrativeArea`<sup>Required</sup> <a name="administrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea"></a>

```java
public java.lang.String getAdministrativeArea();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode"></a>

```java
public java.lang.String getRegionCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationContactSettingsOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsOutputReference;

new GoogleClouddomainsRegistrationContactSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact">putAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact">putRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact">putTechnicalContact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminContact` <a name="putAdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact"></a>

```java
public void putAdminContact(GoogleClouddomainsRegistrationContactSettingsAdminContact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `putRegistrantContact` <a name="putRegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact"></a>

```java
public void putRegistrantContact(GoogleClouddomainsRegistrationContactSettingsRegistrantContact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `putTechnicalContact` <a name="putTechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact"></a>

```java
public void putTechnicalContact(GoogleClouddomainsRegistrationContactSettingsTechnicalContact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact">technicalContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput">adminContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput">privacyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput">registrantContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput">technicalContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacy">privacy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContact"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference getAdminContact();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference</a>

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference getRegistrantContact();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a>

---

##### `technicalContact`<sup>Required</sup> <a name="technicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference getTechnicalContact();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a>

---

##### `adminContactInput`<sup>Optional</sup> <a name="adminContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsAdminContact getAdminContactInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput"></a>

```java
public java.lang.String getPrivacyInput();
```

- *Type:* java.lang.String

---

##### `registrantContactInput`<sup>Optional</sup> <a name="registrantContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContact getRegistrantContactInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `technicalContactInput`<sup>Optional</sup> <a name="technicalContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContact getTechnicalContactInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacy"></a>

```java
public java.lang.String getPrivacy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---


### GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference;

new GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress">putPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostalAddress` <a name="putPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress"></a>

```java
public void putPostalAddress(GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber"></a>

```java
public void resetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput">faxNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput">postalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference getPostalAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput"></a>

```java
public java.lang.String getFaxNumberInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress getPostalAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContact getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference;

new GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines">resetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea">resetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLines` <a name="resetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines"></a>

```java
public void resetAddressLines()
```

##### `resetAdministrativeArea` <a name="resetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```java
public void resetAdministrativeArea()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients"></a>

```java
public void resetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput">addressLinesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput">administrativeAreaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput">regionCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines">addressLines</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea">administrativeArea</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode">regionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLinesInput`<sup>Optional</sup> <a name="addressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput"></a>

```java
public java.util.List<java.lang.String> getAddressLinesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `administrativeAreaInput`<sup>Optional</sup> <a name="administrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```java
public java.lang.String getAdministrativeAreaInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput"></a>

```java
public java.util.List<java.lang.String> getRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodeInput`<sup>Optional</sup> <a name="regionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput"></a>

```java
public java.lang.String getRegionCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLines`<sup>Required</sup> <a name="addressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines"></a>

```java
public java.util.List<java.lang.String> getAddressLines();
```

- *Type:* java.util.List<java.lang.String>

---

##### `administrativeArea`<sup>Required</sup> <a name="administrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea"></a>

```java
public java.lang.String getAdministrativeArea();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode"></a>

```java
public java.lang.String getRegionCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference;

new GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress">putPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostalAddress` <a name="putPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress"></a>

```java
public void putPostalAddress(GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber"></a>

```java
public void resetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput">faxNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput">postalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference getPostalAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput"></a>

```java
public java.lang.String getFaxNumberInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress getPostalAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContact getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference;

new GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines">resetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea">resetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLines` <a name="resetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines"></a>

```java
public void resetAddressLines()
```

##### `resetAdministrativeArea` <a name="resetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```java
public void resetAdministrativeArea()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients"></a>

```java
public void resetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput">addressLinesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput">administrativeAreaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput">regionCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines">addressLines</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea">administrativeArea</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode">regionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLinesInput`<sup>Optional</sup> <a name="addressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput"></a>

```java
public java.util.List<java.lang.String> getAddressLinesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `administrativeAreaInput`<sup>Optional</sup> <a name="administrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```java
public java.lang.String getAdministrativeAreaInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput"></a>

```java
public java.util.List<java.lang.String> getRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodeInput`<sup>Optional</sup> <a name="regionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput"></a>

```java
public java.lang.String getRegionCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLines`<sup>Required</sup> <a name="addressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines"></a>

```java
public java.util.List<java.lang.String> getAddressLines();
```

- *Type:* java.util.List<java.lang.String>

---

##### `administrativeArea`<sup>Required</sup> <a name="administrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea"></a>

```java
public java.lang.String getAdministrativeArea();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode"></a>

```java
public java.lang.String getRegionCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>>

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag">resetKeyTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest"></a>

```java
public void resetDigest()
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType"></a>

```java
public void resetDigestType()
```

##### `resetKeyTag` <a name="resetKeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag"></a>

```java
public void resetKeyTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput">digestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput">digestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput">keyTagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType">digestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput"></a>

```java
public java.lang.String getDigestInput();
```

- *Type:* java.lang.String

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput"></a>

```java
public java.lang.String getDigestTypeInput();
```

- *Type:* java.lang.String

---

##### `keyTagInput`<sup>Optional</sup> <a name="keyTagInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput"></a>

```java
public java.lang.Number getKeyTagInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType"></a>

```java
public java.lang.String getDigestType();
```

- *Type:* java.lang.String

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords">putDsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords">resetDsRecords</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDsRecords` <a name="putDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords"></a>

```java
public void putDsRecords(IResolvable OR java.util.List<GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>>

---

##### `resetDsRecords` <a name="resetDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords"></a>

```java
public void resetDsRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords">dsRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput">dsRecordsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput">nameServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dsRecords`<sup>Required</sup> <a name="dsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList getDsRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a>

---

##### `dsRecordsInput`<sup>Optional</sup> <a name="dsRecordsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput"></a>

```java
public java.lang.Object getDsRecordsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>>

---

##### `nameServersInput`<sup>Optional</sup> <a name="nameServersInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput"></a>

```java
public java.util.List<java.lang.String> getNameServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsCustomDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---


### GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList;

new GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>>

---


### GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference;

new GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses">resetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Addresses` <a name="resetIpv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses"></a>

```java
public void resetIpv4Addresses()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput">ipv4AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `ipv4AddressesInput`<sup>Optional</sup> <a name="ipv4AddressesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpv4AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>

---


### GoogleClouddomainsRegistrationDnsSettingsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationDnsSettingsOutputReference;

new GoogleClouddomainsRegistrationDnsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns">putCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords">putGlueRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns">resetCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords">resetGlueRecords</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomDns` <a name="putCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns"></a>

```java
public void putCustomDns(GoogleClouddomainsRegistrationDnsSettingsCustomDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `putGlueRecords` <a name="putGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords"></a>

```java
public void putGlueRecords(IResolvable OR java.util.List<GoogleClouddomainsRegistrationDnsSettingsGlueRecords> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>>

---

##### `resetCustomDns` <a name="resetCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns"></a>

```java
public void resetCustomDns()
```

##### `resetGlueRecords` <a name="resetGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords"></a>

```java
public void resetGlueRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDns">customDns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords">glueRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList">GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput">customDnsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput">glueRecordsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customDns`<sup>Required</sup> <a name="customDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDns"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference getCustomDns();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a>

---

##### `glueRecords`<sup>Required</sup> <a name="glueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList getGlueRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList">GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList</a>

---

##### `customDnsInput`<sup>Optional</sup> <a name="customDnsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput"></a>

```java
public GoogleClouddomainsRegistrationDnsSettingsCustomDns getCustomDnsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `glueRecordsInput`<sup>Optional</sup> <a name="glueRecordsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput"></a>

```java
public java.lang.Object getGlueRecordsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords">GoogleClouddomainsRegistrationDnsSettingsGlueRecords</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationDnsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---


### GoogleClouddomainsRegistrationManagementSettingsOutputReference <a name="GoogleClouddomainsRegistrationManagementSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationManagementSettingsOutputReference;

new GoogleClouddomainsRegistrationManagementSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod">resetPreferredRenewalMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState">resetTransferLockState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredRenewalMethod` <a name="resetPreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod"></a>

```java
public void resetPreferredRenewalMethod()
```

##### `resetTransferLockState` <a name="resetTransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState"></a>

```java
public void resetTransferLockState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod">renewalMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput">preferredRenewalMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput">transferLockStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod">preferredRenewalMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState">transferLockState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renewalMethod`<sup>Required</sup> <a name="renewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod"></a>

```java
public java.lang.String getRenewalMethod();
```

- *Type:* java.lang.String

---

##### `preferredRenewalMethodInput`<sup>Optional</sup> <a name="preferredRenewalMethodInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput"></a>

```java
public java.lang.String getPreferredRenewalMethodInput();
```

- *Type:* java.lang.String

---

##### `transferLockStateInput`<sup>Optional</sup> <a name="transferLockStateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput"></a>

```java
public java.lang.String getTransferLockStateInput();
```

- *Type:* java.lang.String

---

##### `preferredRenewalMethod`<sup>Required</sup> <a name="preferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod"></a>

```java
public java.lang.String getPreferredRenewalMethod();
```

- *Type:* java.lang.String

---

##### `transferLockState`<sup>Required</sup> <a name="transferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState"></a>

```java
public java.lang.String getTransferLockState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationManagementSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---


### GoogleClouddomainsRegistrationTimeoutsOutputReference <a name="GoogleClouddomainsRegistrationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationTimeoutsOutputReference;

new GoogleClouddomainsRegistrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

---


### GoogleClouddomainsRegistrationYearlyPriceOutputReference <a name="GoogleClouddomainsRegistrationYearlyPriceOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddomains_registration.GoogleClouddomainsRegistrationYearlyPriceOutputReference;

new GoogleClouddomainsRegistrationYearlyPriceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode"></a>

```java
public void resetCurrencyCode()
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetUnits"></a>

```java
public void resetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput"></a>

```java
public java.lang.String getCurrencyCodeInput();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue"></a>

```java
public GoogleClouddomainsRegistrationYearlyPrice getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---



