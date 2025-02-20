# `googleOrganizationAccessApprovalSettings` Submodule <a name="`googleOrganizationAccessApprovalSettings` Submodule" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationAccessApprovalSettings <a name="GoogleOrganizationAccessApprovalSettings" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings google_organization_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettings;

GoogleOrganizationAccessApprovalSettings.Builder.create(Construct scope, java.lang.String id)
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
    .enrolledServices(IResolvable)
    .enrolledServices(java.util.List<GoogleOrganizationAccessApprovalSettingsEnrolledServices>)
    .organizationId(java.lang.String)
//  .activeKeyVersion(java.lang.String)
//  .id(java.lang.String)
//  .notificationEmails(java.util.List<java.lang.String>)
//  .timeouts(GoogleOrganizationAccessApprovalSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.enrolledServices">enrolledServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>></code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.enrolledServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>>

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.activeKeyVersion"></a>

- *Type:* java.lang.String

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.notificationEmails"></a>

- *Type:* java.util.List<java.lang.String>

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices">putEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion">resetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails">resetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnrolledServices` <a name="putEnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices"></a>

```java
public void putEnrolledServices(IResolvable OR java.util.List<GoogleOrganizationAccessApprovalSettingsEnrolledServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleOrganizationAccessApprovalSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---

##### `resetActiveKeyVersion` <a name="resetActiveKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion"></a>

```java
public void resetActiveKeyVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationEmails` <a name="resetNotificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails"></a>

```java
public void resetNotificationEmails()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettings;

GoogleOrganizationAccessApprovalSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettings;

GoogleOrganizationAccessApprovalSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettings;

GoogleOrganizationAccessApprovalSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettings;

GoogleOrganizationAccessApprovalSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOrganizationAccessApprovalSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOrganizationAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOrganizationAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestorHasActiveKeyVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor">enrolledAncestor</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices">enrolledServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion">invalidKeyVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput">activeKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput">enrolledServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput">notificationEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorHasActiveKeyVersion`<sup>Required</sup> <a name="ancestorHasActiveKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```java
public IResolvable getAncestorHasActiveKeyVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enrolledAncestor`<sup>Required</sup> <a name="enrolledAncestor" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor"></a>

```java
public IResolvable getEnrolledAncestor();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices"></a>

```java
public GoogleOrganizationAccessApprovalSettingsEnrolledServicesList getEnrolledServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalidKeyVersion`<sup>Required</sup> <a name="invalidKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion"></a>

```java
public IResolvable getInvalidKeyVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts"></a>

```java
public GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `activeKeyVersionInput`<sup>Optional</sup> <a name="activeKeyVersionInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput"></a>

```java
public java.lang.String getActiveKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `enrolledServicesInput`<sup>Optional</sup> <a name="enrolledServicesInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput"></a>

```java
public java.lang.Object getEnrolledServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailsInput`<sup>Optional</sup> <a name="notificationEmailsInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion"></a>

```java
public java.lang.String getActiveKeyVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationEmails`<sup>Required</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails"></a>

```java
public java.util.List<java.lang.String> getNotificationEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationAccessApprovalSettingsConfig <a name="GoogleOrganizationAccessApprovalSettingsConfig" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettingsConfig;

GoogleOrganizationAccessApprovalSettingsConfig.builder()
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
    .enrolledServices(IResolvable)
    .enrolledServices(java.util.List<GoogleOrganizationAccessApprovalSettingsEnrolledServices>)
    .organizationId(java.lang.String)
//  .activeKeyVersion(java.lang.String)
//  .id(java.lang.String)
//  .notificationEmails(java.util.List<java.lang.String>)
//  .timeouts(GoogleOrganizationAccessApprovalSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices">enrolledServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>></code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices"></a>

```java
public java.lang.Object getEnrolledServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>>

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```java
public java.lang.String getActiveKeyVersion();
```

- *Type:* java.lang.String

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails"></a>

```java
public java.util.List<java.lang.String> getNotificationEmails();
```

- *Type:* java.util.List<java.lang.String>

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts"></a>

```java
public GoogleOrganizationAccessApprovalSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}

---

### GoogleOrganizationAccessApprovalSettingsEnrolledServices <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettingsEnrolledServices;

GoogleOrganizationAccessApprovalSettingsEnrolledServices.builder()
    .cloudProduct(java.lang.String)
//  .enrollmentLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloudProduct</a></code> | <code>java.lang.String</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollmentLevel</a></code> | <code>java.lang.String</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```java
public java.lang.String getCloudProduct();
```

- *Type:* java.lang.String

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#cloud_product GoogleOrganizationAccessApprovalSettings#cloud_product}

---

##### `enrollmentLevel`<sup>Optional</sup> <a name="enrollmentLevel" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```java
public java.lang.String getEnrollmentLevel();
```

- *Type:* java.lang.String

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#enrollment_level GoogleOrganizationAccessApprovalSettings#enrollment_level}

---

### GoogleOrganizationAccessApprovalSettingsTimeouts <a name="GoogleOrganizationAccessApprovalSettingsTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettingsTimeouts;

GoogleOrganizationAccessApprovalSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationAccessApprovalSettingsEnrolledServicesList <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList;

new GoogleOrganizationAccessApprovalSettingsEnrolledServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get"></a>

```java
public GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>>

---


### GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference;

new GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">resetEnrollmentLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnrollmentLevel` <a name="resetEnrollmentLevel" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```java
public void resetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloudProductInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollmentLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloudProduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollmentLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProductInput`<sup>Optional</sup> <a name="cloudProductInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```java
public java.lang.String getCloudProductInput();
```

- *Type:* java.lang.String

---

##### `enrollmentLevelInput`<sup>Optional</sup> <a name="enrollmentLevelInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```java
public java.lang.String getEnrollmentLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```java
public java.lang.String getCloudProduct();
```

- *Type:* java.lang.String

---

##### `enrollmentLevel`<sup>Required</sup> <a name="enrollmentLevel" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```java
public java.lang.String getEnrollmentLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>

---


### GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_organization_access_approval_settings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference;

new GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---



