# `googleApihubPluginInstance` Submodule <a name="`googleApihubPluginInstance` Submodule" id="@cdktf/provider-google-beta.googleApihubPluginInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubPluginInstance <a name="GoogleApihubPluginInstance" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance google_apihub_plugin_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstance;

GoogleApihubPluginInstance.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
    .plugin(java.lang.String)
    .pluginInstanceId(java.lang.String)
//  .actions(IResolvable)
//  .actions(java.util.List<GoogleApihubPluginInstanceActions>)
//  .authConfig(GoogleApihubPluginInstanceAuthConfig)
//  .disable(java.lang.Boolean)
//  .disable(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApihubPluginInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.plugin">plugin</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.pluginInstanceId">pluginInstanceId</a></code> | <code>java.lang.String</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.actions">actions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>></code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#display_name GoogleApihubPluginInstance#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#location GoogleApihubPluginInstance#location}

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.plugin"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#plugin GoogleApihubPluginInstance#plugin}

---

##### `pluginInstanceId`<sup>Required</sup> <a name="pluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.pluginInstanceId"></a>

- *Type:* java.lang.String

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#plugin_instance_id GoogleApihubPluginInstance#plugin_instance_id}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.actions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#actions GoogleApihubPluginInstance#actions}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#auth_config GoogleApihubPluginInstance#auth_config}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.disable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#disable GoogleApihubPluginInstance#disable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#timeouts GoogleApihubPluginInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions"></a>

```java
public void putActions(IResolvable OR java.util.List<GoogleApihubPluginInstanceActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>>

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig"></a>

```java
public void putAuthConfig(GoogleApihubPluginInstanceAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleApihubPluginInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions"></a>

```java
public void resetActions()
```

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig"></a>

```java
public void resetAuthConfig()
```

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable"></a>

```java
public void resetDisable()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstance;

GoogleApihubPluginInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstance;

GoogleApihubPluginInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstance;

GoogleApihubPluginInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstance;

GoogleApihubPluginInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApihubPluginInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApihubPluginInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApihubPluginInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubPluginInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput">actionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput">authConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput">disableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput">pluginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput">pluginInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin">plugin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId">pluginInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions"></a>

```java
public GoogleApihubPluginInstanceActionsList getActions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOutputReference getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts"></a>

```java
public GoogleApihubPluginInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput"></a>

```java
public java.lang.Object getActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfig getAuthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput"></a>

```java
public java.lang.Object getDisableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `pluginInput`<sup>Optional</sup> <a name="pluginInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput"></a>

```java
public java.lang.String getPluginInput();
```

- *Type:* java.lang.String

---

##### `pluginInstanceIdInput`<sup>Optional</sup> <a name="pluginInstanceIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput"></a>

```java
public java.lang.String getPluginInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable"></a>

```java
public java.lang.Object getDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin"></a>

```java
public java.lang.String getPlugin();
```

- *Type:* java.lang.String

---

##### `pluginInstanceId`<sup>Required</sup> <a name="pluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId"></a>

```java
public java.lang.String getPluginInstanceId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubPluginInstanceActions <a name="GoogleApihubPluginInstanceActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActions;

GoogleApihubPluginInstanceActions.builder()
    .actionId(java.lang.String)
//  .curationConfig(GoogleApihubPluginInstanceActionsCurationConfig)
//  .scheduleCronExpression(java.lang.String)
//  .scheduleTimeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId">actionId</a></code> | <code>java.lang.String</code> | This should map to one of the action id specified in actions_config in the plugin. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig">curationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | curation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression">scheduleCronExpression</a></code> | <code>java.lang.String</code> | The schedule for this plugin instance action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone">scheduleTimeZone</a></code> | <code>java.lang.String</code> | The time zone for the schedule cron expression. If not provided, UTC will be used. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

This should map to one of the action id specified in actions_config in the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#action_id GoogleApihubPluginInstance#action_id}

---

##### `curationConfig`<sup>Optional</sup> <a name="curationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfig getCurationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

curation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#curation_config GoogleApihubPluginInstance#curation_config}

---

##### `scheduleCronExpression`<sup>Optional</sup> <a name="scheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression"></a>

```java
public java.lang.String getScheduleCronExpression();
```

- *Type:* java.lang.String

The schedule for this plugin instance action.

This can only be set if the
plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#schedule_cron_expression GoogleApihubPluginInstance#schedule_cron_expression}

---

##### `scheduleTimeZone`<sup>Optional</sup> <a name="scheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone"></a>

```java
public java.lang.String getScheduleTimeZone();
```

- *Type:* java.lang.String

The time zone for the schedule cron expression. If not provided, UTC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#schedule_time_zone GoogleApihubPluginInstance#schedule_time_zone}

---

### GoogleApihubPluginInstanceActionsCurationConfig <a name="GoogleApihubPluginInstanceActionsCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsCurationConfig;

GoogleApihubPluginInstanceActionsCurationConfig.builder()
//  .curationType(java.lang.String)
//  .customCuration(GoogleApihubPluginInstanceActionsCurationConfigCustomCuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType">curationType</a></code> | <code>java.lang.String</code> | Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration">customCuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | custom_curation block. |

---

##### `curationType`<sup>Optional</sup> <a name="curationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType"></a>

```java
public java.lang.String getCurationType();
```

- *Type:* java.lang.String

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#curation_type GoogleApihubPluginInstance#curation_type}

---

##### `customCuration`<sup>Optional</sup> <a name="customCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfigCustomCuration getCustomCuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#custom_curation GoogleApihubPluginInstance#custom_curation}

---

### GoogleApihubPluginInstanceActionsCurationConfigCustomCuration <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration;

GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.builder()
    .curation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation">curation</a></code> | <code>java.lang.String</code> | The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'. |

---

##### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation"></a>

```java
public java.lang.String getCuration();
```

- *Type:* java.lang.String

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#curation GoogleApihubPluginInstance#curation}

---

### GoogleApihubPluginInstanceActionsHubInstanceAction <a name="GoogleApihubPluginInstanceActionsHubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsHubInstanceAction;

GoogleApihubPluginInstanceActionsHubInstanceAction.builder()
    .build();
```


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution;

GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution.builder()
    .build();
```


### GoogleApihubPluginInstanceAuthConfig <a name="GoogleApihubPluginInstanceAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfig;

GoogleApihubPluginInstanceAuthConfig.builder()
    .authType(java.lang.String)
//  .apiKeyConfig(GoogleApihubPluginInstanceAuthConfigApiKeyConfig)
//  .googleServiceAccountConfig(GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig)
//  .oauth2ClientCredentialsConfig(GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig)
//  .userPasswordConfig(GoogleApihubPluginInstanceAuthConfigUserPasswordConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig">googleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | google_service_account_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig">oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | oauth2_client_credentials_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig">userPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | user_password_config block. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#auth_type GoogleApihubPluginInstance#auth_type}

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#api_key_config GoogleApihubPluginInstance#api_key_config}

---

##### `googleServiceAccountConfig`<sup>Optional</sup> <a name="googleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig getGoogleServiceAccountConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#google_service_account_config GoogleApihubPluginInstance#google_service_account_config}

---

##### `oauth2ClientCredentialsConfig`<sup>Optional</sup> <a name="oauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig getOauth2ClientCredentialsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#oauth2_client_credentials_config GoogleApihubPluginInstance#oauth2_client_credentials_config}

---

##### `userPasswordConfig`<sup>Optional</sup> <a name="userPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfig getUserPasswordConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#user_password_config GoogleApihubPluginInstance#user_password_config}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfig <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig;

GoogleApihubPluginInstanceAuthConfigApiKeyConfig.builder()
    .apiKey(GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey)
    .httpElementLocation(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation">httpElementLocation</a></code> | <code>java.lang.String</code> | The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey getApiKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#api_key GoogleApihubPluginInstance#api_key}

---

##### `httpElementLocation`<sup>Required</sup> <a name="httpElementLocation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation"></a>

```java
public java.lang.String getHttpElementLocation();
```

- *Type:* java.lang.String

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#http_element_location GoogleApihubPluginInstance#http_element_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#name GoogleApihubPluginInstance#name}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey;

GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.builder()
    .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig;

GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.builder()
    .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to be used for authenticating request. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#service_account GoogleApihubPluginInstance#service_account}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig;

GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.builder()
    .clientId(java.lang.String)
    .clientSecret(GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | client_secret block. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#client_id GoogleApihubPluginInstance#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#client_secret GoogleApihubPluginInstance#client_secret}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret;

GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.builder()
    .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfig <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig;

GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.builder()
    .password(GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password">password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword getPassword();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#password GoogleApihubPluginInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#username GoogleApihubPluginInstance#username}

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword;

GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.builder()
    .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceConfig <a name="GoogleApihubPluginInstanceConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceConfig;

GoogleApihubPluginInstanceConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
    .plugin(java.lang.String)
    .pluginInstanceId(java.lang.String)
//  .actions(IResolvable)
//  .actions(java.util.List<GoogleApihubPluginInstanceActions>)
//  .authConfig(GoogleApihubPluginInstanceAuthConfig)
//  .disable(java.lang.Boolean)
//  .disable(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApihubPluginInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin">plugin</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId">pluginInstanceId</a></code> | <code>java.lang.String</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions">actions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>></code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#display_name GoogleApihubPluginInstance#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#location GoogleApihubPluginInstance#location}

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin"></a>

```java
public java.lang.String getPlugin();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#plugin GoogleApihubPluginInstance#plugin}

---

##### `pluginInstanceId`<sup>Required</sup> <a name="pluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId"></a>

```java
public java.lang.String getPluginInstanceId();
```

- *Type:* java.lang.String

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#plugin_instance_id GoogleApihubPluginInstance#plugin_instance_id}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions"></a>

```java
public java.lang.Object getActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#actions GoogleApihubPluginInstance#actions}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfig getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#auth_config GoogleApihubPluginInstance#auth_config}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable"></a>

```java
public java.lang.Object getDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#disable GoogleApihubPluginInstance#disable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts"></a>

```java
public GoogleApihubPluginInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#timeouts GoogleApihubPluginInstance#timeouts}

---

### GoogleApihubPluginInstanceTimeouts <a name="GoogleApihubPluginInstanceTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceTimeouts;

GoogleApihubPluginInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference;

new GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput">curationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation">curation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `curationInput`<sup>Optional</sup> <a name="curationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput"></a>

```java
public java.lang.String getCurationInput();
```

- *Type:* java.lang.String

---

##### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation"></a>

```java
public java.lang.String getCuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfigCustomCuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---


### GoogleApihubPluginInstanceActionsCurationConfigOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference;

new GoogleApihubPluginInstanceActionsCurationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration">putCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType">resetCurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration">resetCustomCuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCuration` <a name="putCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration"></a>

```java
public void putCustomCuration(GoogleApihubPluginInstanceActionsCurationConfigCustomCuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `resetCurationType` <a name="resetCurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType"></a>

```java
public void resetCurationType()
```

##### `resetCustomCuration` <a name="resetCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration"></a>

```java
public void resetCustomCuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration">customCuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput">curationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput">customCurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType">curationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCuration`<sup>Required</sup> <a name="customCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference getCustomCuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a>

---

##### `curationTypeInput`<sup>Optional</sup> <a name="curationTypeInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput"></a>

```java
public java.lang.String getCurationTypeInput();
```

- *Type:* java.lang.String

---

##### `customCurationInput`<sup>Optional</sup> <a name="customCurationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfigCustomCuration getCustomCurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `curationType`<sup>Required</sup> <a name="curationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType"></a>

```java
public java.lang.String getCurationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList;

new GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get"></a>

```java
public GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference;

new GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsHubInstanceActionList;

new GoogleApihubPluginInstanceActionsHubInstanceActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get"></a>

```java
public GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference;

new GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState">currentExecutionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution">lastExecution</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentExecutionState`<sup>Required</sup> <a name="currentExecutionState" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState"></a>

```java
public java.lang.String getCurrentExecutionState();
```

- *Type:* java.lang.String

---

##### `lastExecution`<sup>Required</sup> <a name="lastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution"></a>

```java
public GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList getLastExecution();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceActionsHubInstanceAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a>

---


### GoogleApihubPluginInstanceActionsList <a name="GoogleApihubPluginInstanceActionsList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsList;

new GoogleApihubPluginInstanceActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get"></a>

```java
public GoogleApihubPluginInstanceActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>>

---


### GoogleApihubPluginInstanceActionsOutputReference <a name="GoogleApihubPluginInstanceActionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceActionsOutputReference;

new GoogleApihubPluginInstanceActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig">putCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig">resetCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression">resetScheduleCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone">resetScheduleTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurationConfig` <a name="putCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig"></a>

```java
public void putCurationConfig(GoogleApihubPluginInstanceActionsCurationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `resetCurationConfig` <a name="resetCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig"></a>

```java
public void resetCurationConfig()
```

##### `resetScheduleCronExpression` <a name="resetScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression"></a>

```java
public void resetScheduleCronExpression()
```

##### `resetScheduleTimeZone` <a name="resetScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone"></a>

```java
public void resetScheduleTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig">curationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction">hubInstanceAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput">curationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput">scheduleCronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput">scheduleTimeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression">scheduleCronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone">scheduleTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `curationConfig`<sup>Required</sup> <a name="curationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfigOutputReference getCurationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a>

---

##### `hubInstanceAction`<sup>Required</sup> <a name="hubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction"></a>

```java
public GoogleApihubPluginInstanceActionsHubInstanceActionList getHubInstanceAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput"></a>

```java
public java.lang.String getActionIdInput();
```

- *Type:* java.lang.String

---

##### `curationConfigInput`<sup>Optional</sup> <a name="curationConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput"></a>

```java
public GoogleApihubPluginInstanceActionsCurationConfig getCurationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `scheduleCronExpressionInput`<sup>Optional</sup> <a name="scheduleCronExpressionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput"></a>

```java
public java.lang.String getScheduleCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleTimeZoneInput`<sup>Optional</sup> <a name="scheduleTimeZoneInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput"></a>

```java
public java.lang.String getScheduleTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `scheduleCronExpression`<sup>Required</sup> <a name="scheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression"></a>

```java
public java.lang.String getScheduleCronExpression();
```

- *Type:* java.lang.String

---

##### `scheduleTimeZone`<sup>Required</sup> <a name="scheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone"></a>

```java
public java.lang.String getScheduleTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference;

new GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference;

new GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey">putApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey"></a>

```java
public void putApiKey(GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput">httpElementLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation">httpElementLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey getApiKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---

##### `httpElementLocationInput`<sup>Optional</sup> <a name="httpElementLocationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput"></a>

```java
public java.lang.String getHttpElementLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `httpElementLocation`<sup>Required</sup> <a name="httpElementLocation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation"></a>

```java
public java.lang.String getHttpElementLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference;

new GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference;

new GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference;

new GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret"></a>

```java
public void putClientSecret(GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret getClientSecretInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigOutputReference;

new GoogleApihubPluginInstanceAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig">putGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig">putOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig">putUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig">resetGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig">resetOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig">resetUserPasswordConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(GoogleApihubPluginInstanceAuthConfigApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `putGoogleServiceAccountConfig` <a name="putGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig"></a>

```java
public void putGoogleServiceAccountConfig(GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `putOauth2ClientCredentialsConfig` <a name="putOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig"></a>

```java
public void putOauth2ClientCredentialsConfig(GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `putUserPasswordConfig` <a name="putUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig"></a>

```java
public void putUserPasswordConfig(GoogleApihubPluginInstanceAuthConfigUserPasswordConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetGoogleServiceAccountConfig` <a name="resetGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig"></a>

```java
public void resetGoogleServiceAccountConfig()
```

##### `resetOauth2ClientCredentialsConfig` <a name="resetOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig"></a>

```java
public void resetOauth2ClientCredentialsConfig()
```

##### `resetUserPasswordConfig` <a name="resetUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig"></a>

```java
public void resetUserPasswordConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig">googleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig">oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig">userPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput">googleServiceAccountConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput">oauth2ClientCredentialsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput">userPasswordConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a>

---

##### `googleServiceAccountConfig`<sup>Required</sup> <a name="googleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference getGoogleServiceAccountConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a>

---

##### `oauth2ClientCredentialsConfig`<sup>Required</sup> <a name="oauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference getOauth2ClientCredentialsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a>

---

##### `userPasswordConfig`<sup>Required</sup> <a name="userPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference getUserPasswordConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `googleServiceAccountConfigInput`<sup>Optional</sup> <a name="googleServiceAccountConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig getGoogleServiceAccountConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `oauth2ClientCredentialsConfigInput`<sup>Optional</sup> <a name="oauth2ClientCredentialsConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig getOauth2ClientCredentialsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `userPasswordConfigInput`<sup>Optional</sup> <a name="userPasswordConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfig getUserPasswordConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference;

new GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword">putPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword"></a>

```java
public void putPassword(GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password">password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference getPassword();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword getPasswordInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference;

new GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue"></a>

```java
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


### GoogleApihubPluginInstanceTimeoutsOutputReference <a name="GoogleApihubPluginInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apihub_plugin_instance.GoogleApihubPluginInstanceTimeoutsOutputReference;

new GoogleApihubPluginInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

---



