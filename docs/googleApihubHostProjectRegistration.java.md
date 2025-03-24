# `googleApihubHostProjectRegistration` Submodule <a name="`googleApihubHostProjectRegistration` Submodule" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubHostProjectRegistration <a name="GoogleApihubHostProjectRegistration" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration google_apihub_host_project_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistration;

GoogleApihubHostProjectRegistration.Builder.create(Construct scope, java.lang.String id)
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
    .gcpProject(java.lang.String)
    .hostProjectRegistrationId(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApihubHostProjectRegistrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.hostProjectRegistrationId">hostProjectRegistrationId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#id GoogleApihubHostProjectRegistration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#project GoogleApihubHostProjectRegistration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.gcpProject"></a>

- *Type:* java.lang.String

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#gcp_project GoogleApihubHostProjectRegistration#gcp_project}

---

##### `hostProjectRegistrationId`<sup>Required</sup> <a name="hostProjectRegistrationId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.hostProjectRegistrationId"></a>

- *Type:* java.lang.String

Required.

The ID to use for the Host Project Registration, which will become the
final component of the host project registration's resource name. The ID
must be the same as the Google cloud project specified in the
host_project_registration.gcp_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#host_project_registration_id GoogleApihubHostProjectRegistration#host_project_registration_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#location GoogleApihubHostProjectRegistration#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#id GoogleApihubHostProjectRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#project GoogleApihubHostProjectRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#timeouts GoogleApihubHostProjectRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.putTimeouts"></a>

```java
public void putTimeouts(GoogleApihubHostProjectRegistrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApihubHostProjectRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistration;

GoogleApihubHostProjectRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistration;

GoogleApihubHostProjectRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistration;

GoogleApihubHostProjectRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistration;

GoogleApihubHostProjectRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApihubHostProjectRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApihubHostProjectRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApihubHostProjectRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApihubHostProjectRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubHostProjectRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference">GoogleApihubHostProjectRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.gcpProjectInput">gcpProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.hostProjectRegistrationIdInput">hostProjectRegistrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.hostProjectRegistrationId">hostProjectRegistrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.timeouts"></a>

```java
public GoogleApihubHostProjectRegistrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference">GoogleApihubHostProjectRegistrationTimeoutsOutputReference</a>

---

##### `gcpProjectInput`<sup>Optional</sup> <a name="gcpProjectInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.gcpProjectInput"></a>

```java
public java.lang.String getGcpProjectInput();
```

- *Type:* java.lang.String

---

##### `hostProjectRegistrationIdInput`<sup>Optional</sup> <a name="hostProjectRegistrationIdInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.hostProjectRegistrationIdInput"></a>

```java
public java.lang.String getHostProjectRegistrationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a>

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.gcpProject"></a>

```java
public java.lang.String getGcpProject();
```

- *Type:* java.lang.String

---

##### `hostProjectRegistrationId`<sup>Required</sup> <a name="hostProjectRegistrationId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.hostProjectRegistrationId"></a>

```java
public java.lang.String getHostProjectRegistrationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubHostProjectRegistrationConfig <a name="GoogleApihubHostProjectRegistrationConfig" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistrationConfig;

GoogleApihubHostProjectRegistrationConfig.builder()
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
    .gcpProject(java.lang.String)
    .hostProjectRegistrationId(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApihubHostProjectRegistrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.hostProjectRegistrationId">hostProjectRegistrationId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#id GoogleApihubHostProjectRegistration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#project GoogleApihubHostProjectRegistration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.gcpProject"></a>

```java
public java.lang.String getGcpProject();
```

- *Type:* java.lang.String

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#gcp_project GoogleApihubHostProjectRegistration#gcp_project}

---

##### `hostProjectRegistrationId`<sup>Required</sup> <a name="hostProjectRegistrationId" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.hostProjectRegistrationId"></a>

```java
public java.lang.String getHostProjectRegistrationId();
```

- *Type:* java.lang.String

Required.

The ID to use for the Host Project Registration, which will become the
final component of the host project registration's resource name. The ID
must be the same as the Google cloud project specified in the
host_project_registration.gcp_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#host_project_registration_id GoogleApihubHostProjectRegistration#host_project_registration_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#location GoogleApihubHostProjectRegistration#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#id GoogleApihubHostProjectRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#project GoogleApihubHostProjectRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationConfig.property.timeouts"></a>

```java
public GoogleApihubHostProjectRegistrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#timeouts GoogleApihubHostProjectRegistration#timeouts}

---

### GoogleApihubHostProjectRegistrationTimeouts <a name="GoogleApihubHostProjectRegistrationTimeouts" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistrationTimeouts;

GoogleApihubHostProjectRegistrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#create GoogleApihubHostProjectRegistration#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#delete GoogleApihubHostProjectRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#create GoogleApihubHostProjectRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apihub_host_project_registration#delete GoogleApihubHostProjectRegistration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubHostProjectRegistrationTimeoutsOutputReference <a name="GoogleApihubHostProjectRegistrationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_host_project_registration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference;

new GoogleApihubHostProjectRegistrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubHostProjectRegistration.GoogleApihubHostProjectRegistrationTimeouts">GoogleApihubHostProjectRegistrationTimeouts</a>

---



