# `googleFirebaseHostingCustomDomain` Submodule <a name="`googleFirebaseHostingCustomDomain` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingCustomDomain <a name="GoogleFirebaseHostingCustomDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain google_firebase_hosting_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomain;

GoogleFirebaseHostingCustomDomain.Builder.create(Construct scope, java.lang.String id)
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
    .customDomain(java.lang.String)
    .siteId(java.lang.String)
//  .certPreference(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .redirectTarget(java.lang.String)
//  .timeouts(GoogleFirebaseHostingCustomDomainTimeouts)
//  .waitDnsVerification(java.lang.Boolean)
//  .waitDnsVerification(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.customDomain">customDomain</a></code> | <code>java.lang.String</code> | The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | The ID of the site in which to create this custom domain association. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.certPreference">certPreference</a></code> | <code>java.lang.String</code> | A field that lets you specify which SSL certificate type Hosting creates for your domain name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.redirectTarget">redirectTarget</a></code> | <code>java.lang.String</code> | A domain name that this CustomDomain should direct traffic towards. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.waitDnsVerification">waitDnsVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.customDomain"></a>

- *Type:* java.lang.String

The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#custom_domain GoogleFirebaseHostingCustomDomain#custom_domain}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

The ID of the site in which to create this custom domain association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#site_id GoogleFirebaseHostingCustomDomain#site_id}

---

##### `certPreference`<sup>Optional</sup> <a name="certPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.certPreference"></a>

- *Type:* java.lang.String

A field that lets you specify which SSL certificate type Hosting creates for your domain name.

Spark plan 'CustomDomain's only have access to the
'GROUPED' cert type, while Blaze plan can select any option. Possible values: ["GROUPED", "PROJECT_GROUPED", "DEDICATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#cert_preference GoogleFirebaseHostingCustomDomain#cert_preference}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}.

---

##### `redirectTarget`<sup>Optional</sup> <a name="redirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.redirectTarget"></a>

- *Type:* java.lang.String

A domain name that this CustomDomain should direct traffic towards.

If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified 'redirect_target'
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#redirect_target GoogleFirebaseHostingCustomDomain#redirect_target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#timeouts GoogleFirebaseHostingCustomDomain#timeouts}

---

##### `waitDnsVerification`<sup>Optional</sup> <a name="waitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.waitDnsVerification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'.

If false, Terraform will not wait for DNS records on the 'CustomDomain'. Any issues in
the 'CustomDomain' will be returned and stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#wait_dns_verification GoogleFirebaseHostingCustomDomain#wait_dns_verification}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetCertPreference">resetCertPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetRedirectTarget">resetRedirectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetWaitDnsVerification">resetWaitDnsVerification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseHostingCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

---

##### `resetCertPreference` <a name="resetCertPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetCertPreference"></a>

```java
public void resetCertPreference()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetProject"></a>

```java
public void resetProject()
```

##### `resetRedirectTarget` <a name="resetRedirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetRedirectTarget"></a>

```java
public void resetRedirectTarget()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitDnsVerification` <a name="resetWaitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetWaitDnsVerification"></a>

```java
public void resetWaitDnsVerification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomain;

GoogleFirebaseHostingCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomain;

GoogleFirebaseHostingCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomain;

GoogleFirebaseHostingCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomain;

GoogleFirebaseHostingCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseHostingCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseHostingCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseHostingCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList">GoogleFirebaseHostingCustomDomainCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.hostState">hostState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList">GoogleFirebaseHostingCustomDomainIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.ownershipState">ownershipState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.requiredDnsUpdates">requiredDnsUpdates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference">GoogleFirebaseHostingCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreferenceInput">certPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomainInput">customDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTargetInput">redirectTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerificationInput">waitDnsVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreference">certPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTarget">redirectTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerification">waitDnsVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cert"></a>

```java
public GoogleFirebaseHostingCustomDomainCertList getCert();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList">GoogleFirebaseHostingCustomDomainCertList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `hostState`<sup>Required</sup> <a name="hostState" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.hostState"></a>

```java
public java.lang.String getHostState();
```

- *Type:* java.lang.String

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.issues"></a>

```java
public GoogleFirebaseHostingCustomDomainIssuesList getIssues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList">GoogleFirebaseHostingCustomDomainIssuesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownershipState`<sup>Required</sup> <a name="ownershipState" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.ownershipState"></a>

```java
public java.lang.String getOwnershipState();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `requiredDnsUpdates`<sup>Required</sup> <a name="requiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.requiredDnsUpdates"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList getRequiredDnsUpdates();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeouts"></a>

```java
public GoogleFirebaseHostingCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference">GoogleFirebaseHostingCustomDomainTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `certPreferenceInput`<sup>Optional</sup> <a name="certPreferenceInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreferenceInput"></a>

```java
public java.lang.String getCertPreferenceInput();
```

- *Type:* java.lang.String

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomainInput"></a>

```java
public java.lang.String getCustomDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `redirectTargetInput`<sup>Optional</sup> <a name="redirectTargetInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTargetInput"></a>

```java
public java.lang.String getRedirectTargetInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

---

##### `waitDnsVerificationInput`<sup>Optional</sup> <a name="waitDnsVerificationInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerificationInput"></a>

```java
public java.lang.Object getWaitDnsVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certPreference`<sup>Required</sup> <a name="certPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreference"></a>

```java
public java.lang.String getCertPreference();
```

- *Type:* java.lang.String

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `redirectTarget`<sup>Required</sup> <a name="redirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTarget"></a>

```java
public java.lang.String getRedirectTarget();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `waitDnsVerification`<sup>Required</sup> <a name="waitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerification"></a>

```java
public java.lang.Object getWaitDnsVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingCustomDomainCert <a name="GoogleFirebaseHostingCustomDomainCert" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCert;

GoogleFirebaseHostingCustomDomainCert.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerification <a name="GoogleFirebaseHostingCustomDomainCertVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerification;

GoogleFirebaseHostingCustomDomainCertVerification.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerificationDns <a name="GoogleFirebaseHostingCustomDomainCertVerificationDns" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDns;

GoogleFirebaseHostingCustomDomainCertVerificationDns.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired;

GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords;

GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered;

GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords;

GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainCertVerificationHttp <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttp" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationHttp;

GoogleFirebaseHostingCustomDomainCertVerificationHttp.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainConfig <a name="GoogleFirebaseHostingCustomDomainConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainConfig;

GoogleFirebaseHostingCustomDomainConfig.builder()
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
    .customDomain(java.lang.String)
    .siteId(java.lang.String)
//  .certPreference(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .redirectTarget(java.lang.String)
//  .timeouts(GoogleFirebaseHostingCustomDomainTimeouts)
//  .waitDnsVerification(java.lang.Boolean)
//  .waitDnsVerification(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | The ID of the site in which to create this custom domain association. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.certPreference">certPreference</a></code> | <code>java.lang.String</code> | A field that lets you specify which SSL certificate type Hosting creates for your domain name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.redirectTarget">redirectTarget</a></code> | <code>java.lang.String</code> | A domain name that this CustomDomain should direct traffic towards. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.waitDnsVerification">waitDnsVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#custom_domain GoogleFirebaseHostingCustomDomain#custom_domain}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

The ID of the site in which to create this custom domain association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#site_id GoogleFirebaseHostingCustomDomain#site_id}

---

##### `certPreference`<sup>Optional</sup> <a name="certPreference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.certPreference"></a>

```java
public java.lang.String getCertPreference();
```

- *Type:* java.lang.String

A field that lets you specify which SSL certificate type Hosting creates for your domain name.

Spark plan 'CustomDomain's only have access to the
'GROUPED' cert type, while Blaze plan can select any option. Possible values: ["GROUPED", "PROJECT_GROUPED", "DEDICATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#cert_preference GoogleFirebaseHostingCustomDomain#cert_preference}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}.

---

##### `redirectTarget`<sup>Optional</sup> <a name="redirectTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.redirectTarget"></a>

```java
public java.lang.String getRedirectTarget();
```

- *Type:* java.lang.String

A domain name that this CustomDomain should direct traffic towards.

If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified 'redirect_target'
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#redirect_target GoogleFirebaseHostingCustomDomain#redirect_target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.timeouts"></a>

```java
public GoogleFirebaseHostingCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#timeouts GoogleFirebaseHostingCustomDomain#timeouts}

---

##### `waitDnsVerification`<sup>Optional</sup> <a name="waitDnsVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.waitDnsVerification"></a>

```java
public java.lang.Object getWaitDnsVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'.

If false, Terraform will not wait for DNS records on the 'CustomDomain'. Any issues in
the 'CustomDomain' will be returned and stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#wait_dns_verification GoogleFirebaseHostingCustomDomain#wait_dns_verification}

---

### GoogleFirebaseHostingCustomDomainIssues <a name="GoogleFirebaseHostingCustomDomainIssues" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainIssues;

GoogleFirebaseHostingCustomDomainIssues.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdates <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates;

GoogleFirebaseHostingCustomDomainRequiredDnsUpdates.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired;

GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords;

GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered;

GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords;

GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords.builder()
    .build();
```


### GoogleFirebaseHostingCustomDomainTimeouts <a name="GoogleFirebaseHostingCustomDomainTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainTimeouts;

GoogleFirebaseHostingCustomDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingCustomDomainCertList <a name="GoogleFirebaseHostingCustomDomainCertList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertList;

new GoogleFirebaseHostingCustomDomainCertList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertOutputReference <a name="GoogleFirebaseHostingCustomDomainCertOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertOutputReference;

new GoogleFirebaseHostingCustomDomainCertOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList">GoogleFirebaseHostingCustomDomainCertVerificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert">GoogleFirebaseHostingCustomDomainCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.verification"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationList getVerification();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList">GoogleFirebaseHostingCustomDomainCertVerificationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCert getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert">GoogleFirebaseHostingCustomDomainCert</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.records"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList getRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.requiredAction"></a>

```java
public java.lang.String getRequiredAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.records"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList getRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.requiredAction"></a>

```java
public java.lang.String getRequiredAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.checkTime">checkTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns">GoogleFirebaseHostingCustomDomainCertVerificationDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkTime`<sup>Required</sup> <a name="checkTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.checkTime"></a>

```java
public java.lang.String getCheckTime();
```

- *Type:* java.lang.String

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.desired"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList getDesired();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.discovered"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList getDiscovered();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns">GoogleFirebaseHostingCustomDomainCertVerificationDns</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationHttpList <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttpList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList;

new GoogleFirebaseHostingCustomDomainCertVerificationHttpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.desired">desired</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.discovered">discovered</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.lastCheckTime">lastCheckTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp">GoogleFirebaseHostingCustomDomainCertVerificationHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.desired"></a>

```java
public java.lang.String getDesired();
```

- *Type:* java.lang.String

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.discovered"></a>

```java
public java.lang.String getDiscovered();
```

- *Type:* java.lang.String

---

##### `lastCheckTime`<sup>Required</sup> <a name="lastCheckTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.lastCheckTime"></a>

```java
public java.lang.String getLastCheckTime();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationHttp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp">GoogleFirebaseHostingCustomDomainCertVerificationHttp</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationList <a name="GoogleFirebaseHostingCustomDomainCertVerificationList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationList;

new GoogleFirebaseHostingCustomDomainCertVerificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainCertVerificationOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference;

new GoogleFirebaseHostingCustomDomainCertVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList">GoogleFirebaseHostingCustomDomainCertVerificationHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification">GoogleFirebaseHostingCustomDomainCertVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.dns"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationDnsList getDns();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsList</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.http"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerificationHttpList getHttp();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList">GoogleFirebaseHostingCustomDomainCertVerificationHttpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainCertVerification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification">GoogleFirebaseHostingCustomDomainCertVerification</a>

---


### GoogleFirebaseHostingCustomDomainIssuesList <a name="GoogleFirebaseHostingCustomDomainIssuesList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainIssuesList;

new GoogleFirebaseHostingCustomDomainIssuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainIssuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainIssuesOutputReference <a name="GoogleFirebaseHostingCustomDomainIssuesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainIssuesOutputReference;

new GoogleFirebaseHostingCustomDomainIssuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues">GoogleFirebaseHostingCustomDomainIssues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainIssues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues">GoogleFirebaseHostingCustomDomainIssues</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.records"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList getRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction"></a>

```java
public java.lang.String getRequiredAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.records"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList getRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction">requiredAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

---

##### `requiredAction`<sup>Required</sup> <a name="requiredAction" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction"></a>

```java
public java.lang.String getRequiredAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference;

new GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.checkTime">checkTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates">GoogleFirebaseHostingCustomDomainRequiredDnsUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkTime`<sup>Required</sup> <a name="checkTime" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.checkTime"></a>

```java
public java.lang.String getCheckTime();
```

- *Type:* java.lang.String

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.desired"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList getDesired();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.discovered"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList getDiscovered();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingCustomDomainRequiredDnsUpdates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates">GoogleFirebaseHostingCustomDomainRequiredDnsUpdates</a>

---


### GoogleFirebaseHostingCustomDomainTimeoutsOutputReference <a name="GoogleFirebaseHostingCustomDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_custom_domain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference;

new GoogleFirebaseHostingCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

---



