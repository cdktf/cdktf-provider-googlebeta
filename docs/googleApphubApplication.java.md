# `googleApphubApplication` Submodule <a name="`googleApphubApplication` Submodule" id="@cdktf/provider-google-beta.googleApphubApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApphubApplication <a name="GoogleApphubApplication" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application google_apphub_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplication;

GoogleApphubApplication.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .location(java.lang.String)
    .scope(GoogleApphubApplicationScope)
//  .attributes(GoogleApphubApplicationAttributes)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApphubApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. User-defined description of an Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. User-defined name for the Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#id GoogleApphubApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#project GoogleApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#application_id GoogleApphubApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#location GoogleApphubApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#scope GoogleApphubApplication#scope}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#attributes GoogleApphubApplication#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. User-defined description of an Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#description GoogleApphubApplication#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. User-defined name for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#id GoogleApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#project GoogleApphubApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#timeouts GoogleApphubApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes"></a>

```java
public void putAttributes(GoogleApphubApplicationAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putScope"></a>

```java
public void putScope(GoogleApphubApplicationScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts"></a>

```java
public void putTimeouts(GoogleApphubApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApphubApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplication;

GoogleApphubApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplication;

GoogleApphubApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplication;

GoogleApphubApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplication;

GoogleApphubApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApphubApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApphubApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApphubApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApphubApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApphubApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference">GoogleApphubApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference">GoogleApphubApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference">GoogleApphubApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributes"></a>

```java
public GoogleApphubApplicationAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference">GoogleApphubApplicationAttributesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scope"></a>

```java
public GoogleApphubApplicationScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference">GoogleApphubApplicationScopeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeouts"></a>

```java
public GoogleApphubApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference">GoogleApphubApplicationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributesInput"></a>

```java
public GoogleApphubApplicationAttributes getAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scopeInput"></a>

```java
public GoogleApphubApplicationScope getScopeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApphubApplicationAttributes <a name="GoogleApphubApplicationAttributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributes;

GoogleApphubApplicationAttributes.builder()
//  .businessOwners(IResolvable)
//  .businessOwners(java.util.List<GoogleApphubApplicationAttributesBusinessOwners>)
//  .criticality(GoogleApphubApplicationAttributesCriticality)
//  .developerOwners(IResolvable)
//  .developerOwners(java.util.List<GoogleApphubApplicationAttributesDeveloperOwners>)
//  .environment(GoogleApphubApplicationAttributesEnvironment)
//  .operatorOwners(IResolvable)
//  .operatorOwners(java.util.List<GoogleApphubApplicationAttributesOperatorOwners>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.businessOwners">businessOwners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>></code> | business_owners block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.developerOwners">developerOwners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>></code> | developer_owners block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.operatorOwners">operatorOwners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>></code> | operator_owners block. |

---

##### `businessOwners`<sup>Optional</sup> <a name="businessOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.businessOwners"></a>

```java
public java.lang.Object getBusinessOwners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>>

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#business_owners GoogleApphubApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.criticality"></a>

```java
public GoogleApphubApplicationAttributesCriticality getCriticality();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#criticality GoogleApphubApplication#criticality}

---

##### `developerOwners`<sup>Optional</sup> <a name="developerOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.developerOwners"></a>

```java
public java.lang.Object getDeveloperOwners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>>

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#developer_owners GoogleApphubApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.environment"></a>

```java
public GoogleApphubApplicationAttributesEnvironment getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#environment GoogleApphubApplication#environment}

---

##### `operatorOwners`<sup>Optional</sup> <a name="operatorOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.operatorOwners"></a>

```java
public java.lang.Object getOperatorOwners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>>

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#operator_owners GoogleApphubApplication#operator_owners}

---

### GoogleApphubApplicationAttributesBusinessOwners <a name="GoogleApphubApplicationAttributesBusinessOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesBusinessOwners;

GoogleApphubApplicationAttributesBusinessOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#email GoogleApphubApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

### GoogleApphubApplicationAttributesCriticality <a name="GoogleApphubApplicationAttributesCriticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesCriticality;

GoogleApphubApplicationAttributesCriticality.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality.property.type">type</a></code> | <code>java.lang.String</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

### GoogleApphubApplicationAttributesDeveloperOwners <a name="GoogleApphubApplicationAttributesDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesDeveloperOwners;

GoogleApphubApplicationAttributesDeveloperOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#email GoogleApphubApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

### GoogleApphubApplicationAttributesEnvironment <a name="GoogleApphubApplicationAttributesEnvironment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesEnvironment;

GoogleApphubApplicationAttributesEnvironment.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment.property.type">type</a></code> | <code>java.lang.String</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

### GoogleApphubApplicationAttributesOperatorOwners <a name="GoogleApphubApplicationAttributesOperatorOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesOperatorOwners;

GoogleApphubApplicationAttributesOperatorOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#email GoogleApphubApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

### GoogleApphubApplicationConfig <a name="GoogleApphubApplicationConfig" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationConfig;

GoogleApphubApplicationConfig.builder()
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
    .applicationId(java.lang.String)
    .location(java.lang.String)
    .scope(GoogleApphubApplicationScope)
//  .attributes(GoogleApphubApplicationAttributes)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApphubApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. User-defined description of an Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. User-defined name for the Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#id GoogleApphubApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#project GoogleApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#application_id GoogleApphubApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#location GoogleApphubApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.scope"></a>

```java
public GoogleApphubApplicationScope getScope();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#scope GoogleApphubApplication#scope}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.attributes"></a>

```java
public GoogleApphubApplicationAttributes getAttributes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#attributes GoogleApphubApplication#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. User-defined description of an Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#description GoogleApphubApplication#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. User-defined name for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#id GoogleApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#project GoogleApphubApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.timeouts"></a>

```java
public GoogleApphubApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#timeouts GoogleApphubApplication#timeouts}

---

### GoogleApphubApplicationScope <a name="GoogleApphubApplicationScope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationScope;

GoogleApphubApplicationScope.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope.property.type">type</a></code> | <code>java.lang.String</code> | Required. Scope Type.   Possible values: REGIONAL GLOBAL Possible values: ["REGIONAL", "GLOBAL"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Required. Scope Type.   Possible values: REGIONAL GLOBAL Possible values: ["REGIONAL", "GLOBAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

### GoogleApphubApplicationTimeouts <a name="GoogleApphubApplicationTimeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationTimeouts;

GoogleApphubApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#create GoogleApphubApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#delete GoogleApphubApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#update GoogleApphubApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#create GoogleApphubApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#delete GoogleApphubApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apphub_application#update GoogleApphubApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApphubApplicationAttributesBusinessOwnersList <a name="GoogleApphubApplicationAttributesBusinessOwnersList" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesBusinessOwnersList;

new GoogleApphubApplicationAttributesBusinessOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.get"></a>

```java
public GoogleApphubApplicationAttributesBusinessOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>>

---


### GoogleApphubApplicationAttributesBusinessOwnersOutputReference <a name="GoogleApphubApplicationAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesBusinessOwnersOutputReference;

new GoogleApphubApplicationAttributesBusinessOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>

---


### GoogleApphubApplicationAttributesCriticalityOutputReference <a name="GoogleApphubApplicationAttributesCriticalityOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesCriticalityOutputReference;

new GoogleApphubApplicationAttributesCriticalityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```java
public GoogleApphubApplicationAttributesCriticality getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

---


### GoogleApphubApplicationAttributesDeveloperOwnersList <a name="GoogleApphubApplicationAttributesDeveloperOwnersList" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesDeveloperOwnersList;

new GoogleApphubApplicationAttributesDeveloperOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.get"></a>

```java
public GoogleApphubApplicationAttributesDeveloperOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>>

---


### GoogleApphubApplicationAttributesDeveloperOwnersOutputReference <a name="GoogleApphubApplicationAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference;

new GoogleApphubApplicationAttributesDeveloperOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>

---


### GoogleApphubApplicationAttributesEnvironmentOutputReference <a name="GoogleApphubApplicationAttributesEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesEnvironmentOutputReference;

new GoogleApphubApplicationAttributesEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```java
public GoogleApphubApplicationAttributesEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

---


### GoogleApphubApplicationAttributesOperatorOwnersList <a name="GoogleApphubApplicationAttributesOperatorOwnersList" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesOperatorOwnersList;

new GoogleApphubApplicationAttributesOperatorOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.get"></a>

```java
public GoogleApphubApplicationAttributesOperatorOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>>

---


### GoogleApphubApplicationAttributesOperatorOwnersOutputReference <a name="GoogleApphubApplicationAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesOperatorOwnersOutputReference;

new GoogleApphubApplicationAttributesOperatorOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>

---


### GoogleApphubApplicationAttributesOutputReference <a name="GoogleApphubApplicationAttributesOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationAttributesOutputReference;

new GoogleApphubApplicationAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putBusinessOwners">putBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putCriticality">putCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putDeveloperOwners">putDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putOperatorOwners">putOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetBusinessOwners">resetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetCriticality">resetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetDeveloperOwners">resetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetOperatorOwners">resetOperatorOwners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBusinessOwners` <a name="putBusinessOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putBusinessOwners"></a>

```java
public void putBusinessOwners(IResolvable OR java.util.List<GoogleApphubApplicationAttributesBusinessOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>>

---

##### `putCriticality` <a name="putCriticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putCriticality"></a>

```java
public void putCriticality(GoogleApphubApplicationAttributesCriticality value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

---

##### `putDeveloperOwners` <a name="putDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putDeveloperOwners"></a>

```java
public void putDeveloperOwners(IResolvable OR java.util.List<GoogleApphubApplicationAttributesDeveloperOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putEnvironment"></a>

```java
public void putEnvironment(GoogleApphubApplicationAttributesEnvironment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

---

##### `putOperatorOwners` <a name="putOperatorOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putOperatorOwners"></a>

```java
public void putOperatorOwners(IResolvable OR java.util.List<GoogleApphubApplicationAttributesOperatorOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>>

---

##### `resetBusinessOwners` <a name="resetBusinessOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetBusinessOwners"></a>

```java
public void resetBusinessOwners()
```

##### `resetCriticality` <a name="resetCriticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetCriticality"></a>

```java
public void resetCriticality()
```

##### `resetDeveloperOwners` <a name="resetDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```java
public void resetDeveloperOwners()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetOperatorOwners` <a name="resetOperatorOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetOperatorOwners"></a>

```java
public void resetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList">GoogleApphubApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference">GoogleApphubApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList">GoogleApphubApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference">GoogleApphubApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList">GoogleApphubApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwnersInput">businessOwnersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticalityInput">criticalityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwnersInput">developerOwnersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwnersInput">operatorOwnersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwners"></a>

```java
public GoogleApphubApplicationAttributesBusinessOwnersList getBusinessOwners();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList">GoogleApphubApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticality"></a>

```java
public GoogleApphubApplicationAttributesCriticalityOutputReference getCriticality();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference">GoogleApphubApplicationAttributesCriticalityOutputReference</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwners"></a>

```java
public GoogleApphubApplicationAttributesDeveloperOwnersList getDeveloperOwners();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList">GoogleApphubApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environment"></a>

```java
public GoogleApphubApplicationAttributesEnvironmentOutputReference getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference">GoogleApphubApplicationAttributesEnvironmentOutputReference</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwners"></a>

```java
public GoogleApphubApplicationAttributesOperatorOwnersList getOperatorOwners();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList">GoogleApphubApplicationAttributesOperatorOwnersList</a>

---

##### `businessOwnersInput`<sup>Optional</sup> <a name="businessOwnersInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```java
public java.lang.Object getBusinessOwnersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>>

---

##### `criticalityInput`<sup>Optional</sup> <a name="criticalityInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticalityInput"></a>

```java
public GoogleApphubApplicationAttributesCriticality getCriticalityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

---

##### `developerOwnersInput`<sup>Optional</sup> <a name="developerOwnersInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```java
public java.lang.Object getDeveloperOwnersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environmentInput"></a>

```java
public GoogleApphubApplicationAttributesEnvironment getEnvironmentInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

---

##### `operatorOwnersInput`<sup>Optional</sup> <a name="operatorOwnersInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```java
public java.lang.Object getOperatorOwnersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.internalValue"></a>

```java
public GoogleApphubApplicationAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

---


### GoogleApphubApplicationScopeOutputReference <a name="GoogleApphubApplicationScopeOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationScopeOutputReference;

new GoogleApphubApplicationScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.internalValue"></a>

```java
public GoogleApphubApplicationScope getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

---


### GoogleApphubApplicationTimeoutsOutputReference <a name="GoogleApphubApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_application.GoogleApphubApplicationTimeoutsOutputReference;

new GoogleApphubApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

---



