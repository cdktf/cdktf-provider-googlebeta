# `googleProjectAccessApprovalSettings` Submodule <a name="`googleProjectAccessApprovalSettings` Submodule" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectAccessApprovalSettings <a name="GoogleProjectAccessApprovalSettings" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings google_project_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettings;

GoogleProjectAccessApprovalSettings.Builder.create(Construct scope, java.lang.String id)
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
    .enrolledServices(java.util.List<GoogleProjectAccessApprovalSettingsEnrolledServices>)
    .projectId(java.lang.String)
//  .activeKeyVersion(java.lang.String)
//  .id(java.lang.String)
//  .notificationEmails(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleProjectAccessApprovalSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.enrolledServices">enrolledServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>></code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project id. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.enrolledServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>>

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#enrolled_services GoogleProjectAccessApprovalSettings#enrolled_services}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#project_id GoogleProjectAccessApprovalSettings#project_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.activeKeyVersion"></a>

- *Type:* java.lang.String

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#active_key_version GoogleProjectAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.notificationEmails"></a>

- *Type:* java.util.List<java.lang.String>

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#notification_emails GoogleProjectAccessApprovalSettings#notification_emails}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#project GoogleProjectAccessApprovalSettings#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#timeouts GoogleProjectAccessApprovalSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices">putEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetActiveKeyVersion">resetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetNotificationEmails">resetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnrolledServices` <a name="putEnrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices"></a>

```java
public void putEnrolledServices(IResolvable OR java.util.List<GoogleProjectAccessApprovalSettingsEnrolledServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleProjectAccessApprovalSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---

##### `resetActiveKeyVersion` <a name="resetActiveKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetActiveKeyVersion"></a>

```java
public void resetActiveKeyVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationEmails` <a name="resetNotificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetNotificationEmails"></a>

```java
public void resetNotificationEmails()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettings;

GoogleProjectAccessApprovalSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettings;

GoogleProjectAccessApprovalSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettings;

GoogleProjectAccessApprovalSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettings;

GoogleProjectAccessApprovalSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleProjectAccessApprovalSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleProjectAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleProjectAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestorHasActiveKeyVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledAncestor">enrolledAncestor</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServices">enrolledServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList">GoogleProjectAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.invalidKeyVersion">invalidKeyVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference">GoogleProjectAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersionInput">activeKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServicesInput">enrolledServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmailsInput">notificationEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorHasActiveKeyVersion`<sup>Required</sup> <a name="ancestorHasActiveKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```java
public IResolvable getAncestorHasActiveKeyVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enrolledAncestor`<sup>Required</sup> <a name="enrolledAncestor" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledAncestor"></a>

```java
public IResolvable getEnrolledAncestor();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServices"></a>

```java
public GoogleProjectAccessApprovalSettingsEnrolledServicesList getEnrolledServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList">GoogleProjectAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalidKeyVersion`<sup>Required</sup> <a name="invalidKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.invalidKeyVersion"></a>

```java
public IResolvable getInvalidKeyVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeouts"></a>

```java
public GoogleProjectAccessApprovalSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference">GoogleProjectAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `activeKeyVersionInput`<sup>Optional</sup> <a name="activeKeyVersionInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersionInput"></a>

```java
public java.lang.String getActiveKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `enrolledServicesInput`<sup>Optional</sup> <a name="enrolledServicesInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServicesInput"></a>

```java
public java.lang.Object getEnrolledServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailsInput`<sup>Optional</sup> <a name="notificationEmailsInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmailsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersion"></a>

```java
public java.lang.String getActiveKeyVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationEmails`<sup>Required</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmails"></a>

```java
public java.util.List<java.lang.String> getNotificationEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectAccessApprovalSettingsConfig <a name="GoogleProjectAccessApprovalSettingsConfig" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettingsConfig;

GoogleProjectAccessApprovalSettingsConfig.builder()
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
    .enrolledServices(java.util.List<GoogleProjectAccessApprovalSettingsEnrolledServices>)
    .projectId(java.lang.String)
//  .activeKeyVersion(java.lang.String)
//  .id(java.lang.String)
//  .notificationEmails(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleProjectAccessApprovalSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.enrolledServices">enrolledServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>></code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project id. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.enrolledServices"></a>

```java
public java.lang.Object getEnrolledServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>>

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#enrolled_services GoogleProjectAccessApprovalSettings#enrolled_services}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#project_id GoogleProjectAccessApprovalSettings#project_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```java
public java.lang.String getActiveKeyVersion();
```

- *Type:* java.lang.String

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#active_key_version GoogleProjectAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.notificationEmails"></a>

```java
public java.util.List<java.lang.String> getNotificationEmails();
```

- *Type:* java.util.List<java.lang.String>

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#notification_emails GoogleProjectAccessApprovalSettings#notification_emails}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#project GoogleProjectAccessApprovalSettings#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.timeouts"></a>

```java
public GoogleProjectAccessApprovalSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#timeouts GoogleProjectAccessApprovalSettings#timeouts}

---

### GoogleProjectAccessApprovalSettingsEnrolledServices <a name="GoogleProjectAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettingsEnrolledServices;

GoogleProjectAccessApprovalSettingsEnrolledServices.builder()
    .cloudProduct(java.lang.String)
//  .enrollmentLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloudProduct</a></code> | <code>java.lang.String</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollmentLevel</a></code> | <code>java.lang.String</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#cloud_product GoogleProjectAccessApprovalSettings#cloud_product}

---

##### `enrollmentLevel`<sup>Optional</sup> <a name="enrollmentLevel" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```java
public java.lang.String getEnrollmentLevel();
```

- *Type:* java.lang.String

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#enrollment_level GoogleProjectAccessApprovalSettings#enrollment_level}

---

### GoogleProjectAccessApprovalSettingsTimeouts <a name="GoogleProjectAccessApprovalSettingsTimeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettingsTimeouts;

GoogleProjectAccessApprovalSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#create GoogleProjectAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#delete GoogleProjectAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#update GoogleProjectAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#create GoogleProjectAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#delete GoogleProjectAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_project_access_approval_settings#update GoogleProjectAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectAccessApprovalSettingsEnrolledServicesList <a name="GoogleProjectAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettingsEnrolledServicesList;

new GoogleProjectAccessApprovalSettingsEnrolledServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get"></a>

```java
public GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>>

---


### GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference;

new GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">resetEnrollmentLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnrollmentLevel` <a name="resetEnrollmentLevel" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```java
public void resetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloudProductInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollmentLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloudProduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollmentLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProductInput`<sup>Optional</sup> <a name="cloudProductInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```java
public java.lang.String getCloudProductInput();
```

- *Type:* java.lang.String

---

##### `enrollmentLevelInput`<sup>Optional</sup> <a name="enrollmentLevelInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```java
public java.lang.String getEnrollmentLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```java
public java.lang.String getCloudProduct();
```

- *Type:* java.lang.String

---

##### `enrollmentLevel`<sup>Required</sup> <a name="enrollmentLevel" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```java
public java.lang.String getEnrollmentLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>

---


### GoogleProjectAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleProjectAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_access_approval_settings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference;

new GoogleProjectAccessApprovalSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---



