# `googleComputeSnapshotSettings` Submodule <a name="`googleComputeSnapshotSettings` Submodule" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshotSettings <a name="GoogleComputeSnapshotSettings" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings google_compute_snapshot_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettings;

GoogleComputeSnapshotSettings.Builder.create(Construct scope, java.lang.String id)
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
    .storageLocation(GoogleComputeSnapshotSettingsStorageLocation)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeSnapshotSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#id GoogleComputeSnapshotSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#project GoogleComputeSnapshotSettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#storage_location GoogleComputeSnapshotSettings#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#id GoogleComputeSnapshotSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#project GoogleComputeSnapshotSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#timeouts GoogleComputeSnapshotSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putStorageLocation"></a>

```java
public void putStorageLocation(GoogleComputeSnapshotSettingsStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeSnapshotSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeSnapshotSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettings;

GoogleComputeSnapshotSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettings;

GoogleComputeSnapshotSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettings;

GoogleComputeSnapshotSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettings;

GoogleComputeSnapshotSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeSnapshotSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeSnapshotSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeSnapshotSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeSnapshotSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshotSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference">GoogleComputeSnapshotSettingsStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference">GoogleComputeSnapshotSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocationInput">storageLocationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocation"></a>

```java
public GoogleComputeSnapshotSettingsStorageLocationOutputReference getStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference">GoogleComputeSnapshotSettingsStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeouts"></a>

```java
public GoogleComputeSnapshotSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference">GoogleComputeSnapshotSettingsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocationInput"></a>

```java
public GoogleComputeSnapshotSettingsStorageLocation getStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotSettingsConfig <a name="GoogleComputeSnapshotSettingsConfig" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsConfig;

GoogleComputeSnapshotSettingsConfig.builder()
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
    .storageLocation(GoogleComputeSnapshotSettingsStorageLocation)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeSnapshotSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#id GoogleComputeSnapshotSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#project GoogleComputeSnapshotSettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.storageLocation"></a>

```java
public GoogleComputeSnapshotSettingsStorageLocation getStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#storage_location GoogleComputeSnapshotSettings#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#id GoogleComputeSnapshotSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#project GoogleComputeSnapshotSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.timeouts"></a>

```java
public GoogleComputeSnapshotSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#timeouts GoogleComputeSnapshotSettings#timeouts}

---

### GoogleComputeSnapshotSettingsStorageLocation <a name="GoogleComputeSnapshotSettingsStorageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsStorageLocation;

GoogleComputeSnapshotSettingsStorageLocation.builder()
    .policy(java.lang.String)
//  .locations(IResolvable)
//  .locations(java.util.List<GoogleComputeSnapshotSettingsStorageLocationLocations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.policy">policy</a></code> | <code>java.lang.String</code> | The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.locations">locations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>></code> | locations block. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#policy GoogleComputeSnapshotSettings#policy}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.locations"></a>

```java
public java.lang.Object getLocations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>>

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#locations GoogleComputeSnapshotSettings#locations}

---

### GoogleComputeSnapshotSettingsStorageLocationLocations <a name="GoogleComputeSnapshotSettingsStorageLocationLocations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsStorageLocationLocations;

GoogleComputeSnapshotSettingsStorageLocationLocations.builder()
    .location(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#location GoogleComputeSnapshotSettings#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.name">name</a></code> | <code>java.lang.String</code> | Name of the location. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#location GoogleComputeSnapshotSettings#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the location.

It should be one of the Cloud Storage buckets.
Only one location can be specified. (should match location)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#name GoogleComputeSnapshotSettings#name}

---

### GoogleComputeSnapshotSettingsTimeouts <a name="GoogleComputeSnapshotSettingsTimeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsTimeouts;

GoogleComputeSnapshotSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#create GoogleComputeSnapshotSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#delete GoogleComputeSnapshotSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#update GoogleComputeSnapshotSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#create GoogleComputeSnapshotSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#delete GoogleComputeSnapshotSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_snapshot_settings#update GoogleComputeSnapshotSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotSettingsStorageLocationLocationsList <a name="GoogleComputeSnapshotSettingsStorageLocationLocationsList" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsStorageLocationLocationsList;

new GoogleComputeSnapshotSettingsStorageLocationLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.get"></a>

```java
public GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>>

---


### GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference <a name="GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference;

new GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>

---


### GoogleComputeSnapshotSettingsStorageLocationOutputReference <a name="GoogleComputeSnapshotSettingsStorageLocationOutputReference" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsStorageLocationOutputReference;

new GoogleComputeSnapshotSettingsStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resetLocations">resetLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocations` <a name="putLocations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.putLocations"></a>

```java
public void putLocations(IResolvable OR java.util.List<GoogleComputeSnapshotSettingsStorageLocationLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.putLocations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>>

---

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resetLocations"></a>

```java
public void resetLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList">GoogleComputeSnapshotSettingsStorageLocationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locationsInput">locationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locations"></a>

```java
public GoogleComputeSnapshotSettingsStorageLocationLocationsList getLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList">GoogleComputeSnapshotSettingsStorageLocationLocationsList</a>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locationsInput"></a>

```java
public java.lang.Object getLocationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.internalValue"></a>

```java
public GoogleComputeSnapshotSettingsStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

---


### GoogleComputeSnapshotSettingsTimeoutsOutputReference <a name="GoogleComputeSnapshotSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_snapshot_settings.GoogleComputeSnapshotSettingsTimeoutsOutputReference;

new GoogleComputeSnapshotSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

---



