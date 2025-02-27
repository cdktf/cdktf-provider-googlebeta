# `googleMigrationCenterPreferenceSet` Submodule <a name="`googleMigrationCenterPreferenceSet` Submodule" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterPreferenceSet <a name="GoogleMigrationCenterPreferenceSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set google_migration_center_preference_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSet;

GoogleMigrationCenterPreferenceSet.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .preferenceSetId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleMigrationCenterPreferenceSetTimeouts)
//  .virtualMachinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferences)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.preferenceSetId">preferenceSetId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.virtualMachinePreferences">virtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | virtual_machine_preferences block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#location GoogleMigrationCenterPreferenceSet#location}

---

##### `preferenceSetId`<sup>Required</sup> <a name="preferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.preferenceSetId"></a>

- *Type:* java.lang.String

Required.

User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#preference_set_id GoogleMigrationCenterPreferenceSet#preference_set_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the preference set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#description GoogleMigrationCenterPreferenceSet#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#display_name GoogleMigrationCenterPreferenceSet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#timeouts GoogleMigrationCenterPreferenceSet#timeouts}

---

##### `virtualMachinePreferences`<sup>Optional</sup> <a name="virtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.virtualMachinePreferences"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

virtual_machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#virtual_machine_preferences GoogleMigrationCenterPreferenceSet#virtual_machine_preferences}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences">putVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetVirtualMachinePreferences">resetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts"></a>

```java
public void putTimeouts(GoogleMigrationCenterPreferenceSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

---

##### `putVirtualMachinePreferences` <a name="putVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences"></a>

```java
public void putVirtualMachinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualMachinePreferences` <a name="resetVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetVirtualMachinePreferences"></a>

```java
public void resetVirtualMachinePreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSet;

GoogleMigrationCenterPreferenceSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSet;

GoogleMigrationCenterPreferenceSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSet;

GoogleMigrationCenterPreferenceSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSet;

GoogleMigrationCenterPreferenceSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMigrationCenterPreferenceSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleMigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMigrationCenterPreferenceSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMigrationCenterPreferenceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterPreferenceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference">GoogleMigrationCenterPreferenceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferences">virtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetIdInput">preferenceSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferencesInput">virtualMachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetId">preferenceSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeouts"></a>

```java
public GoogleMigrationCenterPreferenceSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference">GoogleMigrationCenterPreferenceSetTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `virtualMachinePreferences`<sup>Required</sup> <a name="virtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference getVirtualMachinePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `preferenceSetIdInput`<sup>Optional</sup> <a name="preferenceSetIdInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetIdInput"></a>

```java
public java.lang.String getPreferenceSetIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

---

##### `virtualMachinePreferencesInput`<sup>Optional</sup> <a name="virtualMachinePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferencesInput"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferences getVirtualMachinePreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `preferenceSetId`<sup>Required</sup> <a name="preferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetId"></a>

```java
public java.lang.String getPreferenceSetId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterPreferenceSetConfig <a name="GoogleMigrationCenterPreferenceSetConfig" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetConfig;

GoogleMigrationCenterPreferenceSetConfig.builder()
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
    .location(java.lang.String)
    .preferenceSetId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleMigrationCenterPreferenceSetTimeouts)
//  .virtualMachinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferences)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.preferenceSetId">preferenceSetId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.virtualMachinePreferences">virtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | virtual_machine_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#location GoogleMigrationCenterPreferenceSet#location}

---

##### `preferenceSetId`<sup>Required</sup> <a name="preferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.preferenceSetId"></a>

```java
public java.lang.String getPreferenceSetId();
```

- *Type:* java.lang.String

Required.

User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#preference_set_id GoogleMigrationCenterPreferenceSet#preference_set_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the preference set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#description GoogleMigrationCenterPreferenceSet#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#display_name GoogleMigrationCenterPreferenceSet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.timeouts"></a>

```java
public GoogleMigrationCenterPreferenceSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#timeouts GoogleMigrationCenterPreferenceSet#timeouts}

---

##### `virtualMachinePreferences`<sup>Optional</sup> <a name="virtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.virtualMachinePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferences getVirtualMachinePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

virtual_machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#virtual_machine_preferences GoogleMigrationCenterPreferenceSet#virtual_machine_preferences}

---

### GoogleMigrationCenterPreferenceSetTimeouts <a name="GoogleMigrationCenterPreferenceSetTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetTimeouts;

GoogleMigrationCenterPreferenceSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#create GoogleMigrationCenterPreferenceSet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#delete GoogleMigrationCenterPreferenceSet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#update GoogleMigrationCenterPreferenceSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#create GoogleMigrationCenterPreferenceSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#delete GoogleMigrationCenterPreferenceSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#update GoogleMigrationCenterPreferenceSet#update}.

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.builder()
//  .commitmentPlan(java.lang.String)
//  .computeEnginePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences)
//  .regionPreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences)
//  .sizingOptimizationStrategy(java.lang.String)
//  .soleTenancyPreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences)
//  .targetProduct(java.lang.String)
//  .vmwareEnginePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences">computeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | compute_engine_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences">regionPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | region_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy">sizingOptimizationStrategy</a></code> | <code>java.lang.String</code> | Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences">soleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | sole_tenancy_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct">targetProduct</a></code> | <code>java.lang.String</code> | Target product for assets using this preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences">vmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | vmware_engine_preferences block. |

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'COMMITMENT_PLAN_NONE', 'COMMITMENT_PLAN_ONE_YEAR', 'COMMITMENT_PLAN_THREE_YEARS'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `computeEnginePreferences`<sup>Optional</sup> <a name="computeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences getComputeEnginePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

compute_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#compute_engine_preferences GoogleMigrationCenterPreferenceSet#compute_engine_preferences}

---

##### `regionPreferences`<sup>Optional</sup> <a name="regionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences getRegionPreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

region_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#region_preferences GoogleMigrationCenterPreferenceSet#region_preferences}

---

##### `sizingOptimizationStrategy`<sup>Optional</sup> <a name="sizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy"></a>

```java
public java.lang.String getSizingOptimizationStrategy();
```

- *Type:* java.lang.String

Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine.

If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. Possible values: 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#sizing_optimization_strategy GoogleMigrationCenterPreferenceSet#sizing_optimization_strategy}

---

##### `soleTenancyPreferences`<sup>Optional</sup> <a name="soleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences getSoleTenancyPreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

sole_tenancy_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#sole_tenancy_preferences GoogleMigrationCenterPreferenceSet#sole_tenancy_preferences}

---

##### `targetProduct`<sup>Optional</sup> <a name="targetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct"></a>

```java
public java.lang.String getTargetProduct();
```

- *Type:* java.lang.String

Target product for assets using this preference set.

Specify either target product or business goal, but not both. Possible values: 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#target_product GoogleMigrationCenterPreferenceSet#target_product}

---

##### `vmwareEnginePreferences`<sup>Optional</sup> <a name="vmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences getVmwareEnginePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

vmware_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#vmware_engine_preferences GoogleMigrationCenterPreferenceSet#vmware_engine_preferences}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.builder()
//  .licenseType(java.lang.String)
//  .machinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | License type to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences">machinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | machine_preferences block. |

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

License type to consider when calculating costs for virtual machine insights and recommendations.

If unspecified, costs are calculated based on the default licensing plan. Possible values: 'LICENSE_TYPE_UNSPECIFIED', 'LICENSE_TYPE_DEFAULT', 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#license_type GoogleMigrationCenterPreferenceSet#license_type}

---

##### `machinePreferences`<sup>Optional</sup> <a name="machinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences getMachinePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#machine_preferences GoogleMigrationCenterPreferenceSet#machine_preferences}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.builder()
//  .allowedMachineSeries(IResolvable)
//  .allowedMachineSeries(java.util.List<GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries">allowedMachineSeries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>></code> | allowed_machine_series block. |

---

##### `allowedMachineSeries`<sup>Optional</sup> <a name="allowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries"></a>

```java
public java.lang.Object getAllowedMachineSeries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>>

allowed_machine_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#allowed_machine_series GoogleMigrationCenterPreferenceSet#allowed_machine_series}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.builder()
//  .code(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code">code</a></code> | <code>java.lang.String</code> | Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#code GoogleMigrationCenterPreferenceSet#code}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.builder()
//  .preferredRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions">preferredRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of preferred regions, ordered by the most preferred region first. |

---

##### `preferredRegions`<sup>Optional</sup> <a name="preferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions"></a>

```java
public java.util.List<java.lang.String> getPreferredRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of preferred regions, ordered by the most preferred region first.

Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#preferred_regions GoogleMigrationCenterPreferenceSet#preferred_regions}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.builder()
//  .commitmentPlan(java.lang.String)
//  .cpuOvercommitRatio(java.lang.Number)
//  .hostMaintenancePolicy(java.lang.String)
//  .nodeTypes(IResolvable)
//  .nodeTypes(java.util.List<GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>java.lang.Number</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy">hostMaintenancePolicy</a></code> | <code>java.lang.String</code> | Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes">nodeTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>></code> | node_types block. |

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR', 'COMMITMENT_3_YEAR'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `cpuOvercommitRatio`<sup>Optional</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio"></a>

```java
public java.lang.Number getCpuOvercommitRatio();
```

- *Type:* java.lang.Number

CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#cpu_overcommit_ratio GoogleMigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `hostMaintenancePolicy`<sup>Optional</sup> <a name="hostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy"></a>

```java
public java.lang.String getHostMaintenancePolicy();
```

- *Type:* java.lang.String

Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#host_maintenance_policy GoogleMigrationCenterPreferenceSet#host_maintenance_policy}

---

##### `nodeTypes`<sup>Optional</sup> <a name="nodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes"></a>

```java
public java.lang.Object getNodeTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>>

node_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#node_types GoogleMigrationCenterPreferenceSet#node_types}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.builder()
//  .nodeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes. |

---

##### `nodeName`<sup>Optional</sup> <a name="nodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#node_name GoogleMigrationCenterPreferenceSet#node_name}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;

GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.builder()
//  .commitmentPlan(java.lang.String)
//  .cpuOvercommitRatio(java.lang.Number)
//  .memoryOvercommitRatio(java.lang.Number)
//  .storageDeduplicationCompressionRatio(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>java.lang.Number</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio">memoryOvercommitRatio</a></code> | <code>java.lang.Number</code> | Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio">storageDeduplicationCompressionRatio</a></code> | <code>java.lang.Number</code> | The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. |

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT',

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `cpuOvercommitRatio`<sup>Optional</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio"></a>

```java
public java.lang.Number getCpuOvercommitRatio();
```

- *Type:* java.lang.Number

CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#cpu_overcommit_ratio GoogleMigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `memoryOvercommitRatio`<sup>Optional</sup> <a name="memoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio"></a>

```java
public java.lang.Number getMemoryOvercommitRatio();
```

- *Type:* java.lang.Number

Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#memory_overcommit_ratio GoogleMigrationCenterPreferenceSet#memory_overcommit_ratio}

---

##### `storageDeduplicationCompressionRatio`<sup>Optional</sup> <a name="storageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio"></a>

```java
public java.lang.Number getStorageDeduplicationCompressionRatio();
```

- *Type:* java.lang.Number

The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression.

Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_migration_center_preference_set#storage_deduplication_compression_ratio GoogleMigrationCenterPreferenceSet#storage_deduplication_compression_ratio}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterPreferenceSetTimeoutsOutputReference <a name="GoogleMigrationCenterPreferenceSetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference;

new GoogleMigrationCenterPreferenceSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries">putAllowedMachineSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries">resetAllowedMachineSeries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedMachineSeries` <a name="putAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries"></a>

```java
public void putAllowedMachineSeries(IResolvable OR java.util.List<GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>>

---

##### `resetAllowedMachineSeries` <a name="resetAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries"></a>

```java
public void resetAllowedMachineSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries">allowedMachineSeries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput">allowedMachineSeriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedMachineSeries`<sup>Required</sup> <a name="allowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList getAllowedMachineSeries();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a>

---

##### `allowedMachineSeriesInput`<sup>Optional</sup> <a name="allowedMachineSeriesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput"></a>

```java
public java.lang.Object getAllowedMachineSeriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences">putMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences">resetMachinePreferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachinePreferences` <a name="putMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences"></a>

```java
public void putMachinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetMachinePreferences` <a name="resetMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences"></a>

```java
public void resetMachinePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences">machinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput">machinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machinePreferences`<sup>Required</sup> <a name="machinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference getMachinePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a>

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `machinePreferencesInput`<sup>Optional</sup> <a name="machinePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences getMachinePreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences">putComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences">putRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences">putSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences">putVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences">resetComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences">resetRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy">resetSizingOptimizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences">resetSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct">resetTargetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences">resetVmwareEnginePreferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputeEnginePreferences` <a name="putComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences"></a>

```java
public void putComputeEnginePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `putRegionPreferences` <a name="putRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences"></a>

```java
public void putRegionPreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `putSoleTenancyPreferences` <a name="putSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences"></a>

```java
public void putSoleTenancyPreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `putVmwareEnginePreferences` <a name="putVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences"></a>

```java
public void putVmwareEnginePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan"></a>

```java
public void resetCommitmentPlan()
```

##### `resetComputeEnginePreferences` <a name="resetComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences"></a>

```java
public void resetComputeEnginePreferences()
```

##### `resetRegionPreferences` <a name="resetRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences"></a>

```java
public void resetRegionPreferences()
```

##### `resetSizingOptimizationStrategy` <a name="resetSizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy"></a>

```java
public void resetSizingOptimizationStrategy()
```

##### `resetSoleTenancyPreferences` <a name="resetSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences"></a>

```java
public void resetSoleTenancyPreferences()
```

##### `resetTargetProduct` <a name="resetTargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct"></a>

```java
public void resetTargetProduct()
```

##### `resetVmwareEnginePreferences` <a name="resetVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences"></a>

```java
public void resetVmwareEnginePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences">computeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences">regionPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences">soleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences">vmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput">computeEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput">regionPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput">sizingOptimizationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput">soleTenancyPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput">targetProductInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput">vmwareEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy">sizingOptimizationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct">targetProduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeEnginePreferences`<sup>Required</sup> <a name="computeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference getComputeEnginePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a>

---

##### `regionPreferences`<sup>Required</sup> <a name="regionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference getRegionPreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a>

---

##### `soleTenancyPreferences`<sup>Required</sup> <a name="soleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference getSoleTenancyPreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a>

---

##### `vmwareEnginePreferences`<sup>Required</sup> <a name="vmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference getVmwareEnginePreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a>

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput"></a>

```java
public java.lang.String getCommitmentPlanInput();
```

- *Type:* java.lang.String

---

##### `computeEnginePreferencesInput`<sup>Optional</sup> <a name="computeEnginePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences getComputeEnginePreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `regionPreferencesInput`<sup>Optional</sup> <a name="regionPreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences getRegionPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `sizingOptimizationStrategyInput`<sup>Optional</sup> <a name="sizingOptimizationStrategyInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput"></a>

```java
public java.lang.String getSizingOptimizationStrategyInput();
```

- *Type:* java.lang.String

---

##### `soleTenancyPreferencesInput`<sup>Optional</sup> <a name="soleTenancyPreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences getSoleTenancyPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `targetProductInput`<sup>Optional</sup> <a name="targetProductInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput"></a>

```java
public java.lang.String getTargetProductInput();
```

- *Type:* java.lang.String

---

##### `vmwareEnginePreferencesInput`<sup>Optional</sup> <a name="vmwareEnginePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences getVmwareEnginePreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

---

##### `sizingOptimizationStrategy`<sup>Required</sup> <a name="sizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy"></a>

```java
public java.lang.String getSizingOptimizationStrategy();
```

- *Type:* java.lang.String

---

##### `targetProduct`<sup>Required</sup> <a name="targetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct"></a>

```java
public java.lang.String getTargetProduct();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions">resetPreferredRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredRegions` <a name="resetPreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions"></a>

```java
public void resetPreferredRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput">preferredRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions">preferredRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredRegionsInput`<sup>Optional</sup> <a name="preferredRegionsInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredRegions`<sup>Required</sup> <a name="preferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions"></a>

```java
public java.util.List<java.lang.String> getPreferredRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName">resetNodeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeName` <a name="resetNodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName"></a>

```java
public void resetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput"></a>

```java
public java.lang.String getNodeNameInput();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes">putNodeTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio">resetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy">resetHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes">resetNodeTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeTypes` <a name="putNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes"></a>

```java
public void putNodeTypes(IResolvable OR java.util.List<GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>>

---

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan"></a>

```java
public void resetCommitmentPlan()
```

##### `resetCpuOvercommitRatio` <a name="resetCpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio"></a>

```java
public void resetCpuOvercommitRatio()
```

##### `resetHostMaintenancePolicy` <a name="resetHostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy"></a>

```java
public void resetHostMaintenancePolicy()
```

##### `resetNodeTypes` <a name="resetNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes"></a>

```java
public void resetNodeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes">nodeTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput">cpuOvercommitRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput">hostMaintenancePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput">nodeTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy">hostMaintenancePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeTypes`<sup>Required</sup> <a name="nodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList getNodeTypes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a>

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput"></a>

```java
public java.lang.String getCommitmentPlanInput();
```

- *Type:* java.lang.String

---

##### `cpuOvercommitRatioInput`<sup>Optional</sup> <a name="cpuOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```java
public java.lang.Number getCpuOvercommitRatioInput();
```

- *Type:* java.lang.Number

---

##### `hostMaintenancePolicyInput`<sup>Optional</sup> <a name="hostMaintenancePolicyInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput"></a>

```java
public java.lang.String getHostMaintenancePolicyInput();
```

- *Type:* java.lang.String

---

##### `nodeTypesInput`<sup>Optional</sup> <a name="nodeTypesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput"></a>

```java
public java.lang.Object getNodeTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>>

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

---

##### `cpuOvercommitRatio`<sup>Required</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio"></a>

```java
public java.lang.Number getCpuOvercommitRatio();
```

- *Type:* java.lang.Number

---

##### `hostMaintenancePolicy`<sup>Required</sup> <a name="hostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy"></a>

```java
public java.lang.String getHostMaintenancePolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_migration_center_preference_set.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio">resetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio">resetMemoryOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio">resetStorageDeduplicationCompressionRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan"></a>

```java
public void resetCommitmentPlan()
```

##### `resetCpuOvercommitRatio` <a name="resetCpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio"></a>

```java
public void resetCpuOvercommitRatio()
```

##### `resetMemoryOvercommitRatio` <a name="resetMemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio"></a>

```java
public void resetMemoryOvercommitRatio()
```

##### `resetStorageDeduplicationCompressionRatio` <a name="resetStorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio"></a>

```java
public void resetStorageDeduplicationCompressionRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput">cpuOvercommitRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput">memoryOvercommitRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput">storageDeduplicationCompressionRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio">memoryOvercommitRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio">storageDeduplicationCompressionRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput"></a>

```java
public java.lang.String getCommitmentPlanInput();
```

- *Type:* java.lang.String

---

##### `cpuOvercommitRatioInput`<sup>Optional</sup> <a name="cpuOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```java
public java.lang.Number getCpuOvercommitRatioInput();
```

- *Type:* java.lang.Number

---

##### `memoryOvercommitRatioInput`<sup>Optional</sup> <a name="memoryOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput"></a>

```java
public java.lang.Number getMemoryOvercommitRatioInput();
```

- *Type:* java.lang.Number

---

##### `storageDeduplicationCompressionRatioInput`<sup>Optional</sup> <a name="storageDeduplicationCompressionRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput"></a>

```java
public java.lang.Number getStorageDeduplicationCompressionRatioInput();
```

- *Type:* java.lang.Number

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan"></a>

```java
public java.lang.String getCommitmentPlan();
```

- *Type:* java.lang.String

---

##### `cpuOvercommitRatio`<sup>Required</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio"></a>

```java
public java.lang.Number getCpuOvercommitRatio();
```

- *Type:* java.lang.Number

---

##### `memoryOvercommitRatio`<sup>Required</sup> <a name="memoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio"></a>

```java
public java.lang.Number getMemoryOvercommitRatio();
```

- *Type:* java.lang.Number

---

##### `storageDeduplicationCompressionRatio`<sup>Required</sup> <a name="storageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio"></a>

```java
public java.lang.Number getStorageDeduplicationCompressionRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---



