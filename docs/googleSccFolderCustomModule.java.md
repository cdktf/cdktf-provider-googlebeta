# `googleSccFolderCustomModule` Submodule <a name="`googleSccFolderCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccFolderCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccFolderCustomModule <a name="GoogleSccFolderCustomModule" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module google_scc_folder_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModule;

GoogleSccFolderCustomModule.Builder.create(Construct scope, java.lang.String id)
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
    .customConfig(GoogleSccFolderCustomModuleCustomConfig)
    .displayName(java.lang.String)
    .enablementState(java.lang.String)
    .folder(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSccFolderCustomModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#custom_config GoogleSccFolderCustomModule#custom_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#display_name GoogleSccFolderCustomModule#display_name}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#enablement_state GoogleSccFolderCustomModule#enablement_state}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#folder GoogleSccFolderCustomModule#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#timeouts GoogleSccFolderCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig"></a>

```java
public void putCustomConfig(GoogleSccFolderCustomModuleCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccFolderCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccFolderCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModule;

GoogleSccFolderCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModule;

GoogleSccFolderCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModule;

GoogleSccFolderCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModule;

GoogleSccFolderCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccFolderCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccFolderCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccFolderCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccFolderCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccFolderCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference">GoogleSccFolderCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference">GoogleSccFolderCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.ancestorModule"></a>

```java
public java.lang.String getAncestorModule();
```

- *Type:* java.lang.String

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfig"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigOutputReference getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference">GoogleSccFolderCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeouts"></a>

```java
public GoogleSccFolderCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference">GoogleSccFolderCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfigInput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfig getCustomConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccFolderCustomModuleConfig <a name="GoogleSccFolderCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleConfig;

GoogleSccFolderCustomModuleConfig.builder()
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
    .customConfig(GoogleSccFolderCustomModuleCustomConfig)
    .displayName(java.lang.String)
    .enablementState(java.lang.String)
    .folder(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSccFolderCustomModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.customConfig"></a>

```java
public GoogleSccFolderCustomModuleCustomConfig getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#custom_config GoogleSccFolderCustomModule#custom_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#display_name GoogleSccFolderCustomModule#display_name}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#enablement_state GoogleSccFolderCustomModule#enablement_state}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#folder GoogleSccFolderCustomModule#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.timeouts"></a>

```java
public GoogleSccFolderCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#timeouts GoogleSccFolderCustomModule#timeouts}

---

### GoogleSccFolderCustomModuleCustomConfig <a name="GoogleSccFolderCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfig;

GoogleSccFolderCustomModuleCustomConfig.builder()
    .predicate(GoogleSccFolderCustomModuleCustomConfigPredicate)
    .recommendation(java.lang.String)
    .resourceSelector(GoogleSccFolderCustomModuleCustomConfigResourceSelector)
    .severity(java.lang.String)
//  .customOutput(GoogleSccFolderCustomModuleCustomConfigCustomOutput)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.predicate"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigPredicate getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#predicate GoogleSccFolderCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#recommendation GoogleSccFolderCustomModule#recommendation}

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.resourceSelector"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigResourceSelector getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#resource_selector GoogleSccFolderCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#severity GoogleSccFolderCustomModule#severity}

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.customOutput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutput getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#custom_output GoogleSccFolderCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

### GoogleSccFolderCustomModuleCustomConfigCustomOutput <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutput;

GoogleSccFolderCustomModuleCustomConfigCustomOutput.builder()
//  .properties(IResolvable)
//  .properties(java.util.List<GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>></code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput.property.properties"></a>

```java
public java.lang.Object getProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#properties GoogleSccFolderCustomModule#properties}

---

### GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties;

GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.builder()
//  .name(java.lang.String)
//  .valueExpression(GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>java.lang.String</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#name GoogleSccFolderCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#value_expression GoogleSccFolderCustomModule#value_expression}

---

### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression;

GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#expression GoogleSccFolderCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#location GoogleSccFolderCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#title GoogleSccFolderCustomModule#title}

---

### GoogleSccFolderCustomModuleCustomConfigPredicate <a name="GoogleSccFolderCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigPredicate;

GoogleSccFolderCustomModuleCustomConfigPredicate.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#expression GoogleSccFolderCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#location GoogleSccFolderCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#title GoogleSccFolderCustomModule#title}

---

### GoogleSccFolderCustomModuleCustomConfigResourceSelector <a name="GoogleSccFolderCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigResourceSelector;

GoogleSccFolderCustomModuleCustomConfigResourceSelector.builder()
    .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#resource_types GoogleSccFolderCustomModule#resource_types}

---

### GoogleSccFolderCustomModuleTimeouts <a name="GoogleSccFolderCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleTimeouts;

GoogleSccFolderCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#create GoogleSccFolderCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#delete GoogleSccFolderCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#update GoogleSccFolderCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#create GoogleSccFolderCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#delete GoogleSccFolderCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_folder_custom_module#update GoogleSccFolderCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference;

new GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable OR java.util.List<GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```java
public java.lang.Object getPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList;

new GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>>

---


### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference;

new GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```java
public void putValueExpression(GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```java
public void resetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>

---


### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;

new GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccFolderCustomModuleCustomConfigOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigOutputReference;

new GoogleSccFolderCustomModuleCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```java
public void putCustomOutput(GoogleSccFolderCustomModuleCustomConfigCustomOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate"></a>

```java
public void putPredicate(GoogleSccFolderCustomModuleCustomConfigPredicate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```java
public void putResourceSelector(GoogleSccFolderCustomModuleCustomConfigResourceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```java
public void resetCustomOutput()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference">GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicate"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference">GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigCustomOutput getCustomOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigPredicate getPredicateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```java
public java.lang.String getRecommendationInput();
```

- *Type:* java.lang.String

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigResourceSelector getResourceSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```java
public GoogleSccFolderCustomModuleCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

---


### GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference;

new GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigPredicate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

---


### GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference;

new GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```java
public GoogleSccFolderCustomModuleCustomConfigResourceSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccFolderCustomModuleTimeoutsOutputReference <a name="GoogleSccFolderCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_folder_custom_module.GoogleSccFolderCustomModuleTimeoutsOutputReference;

new GoogleSccFolderCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

---



