# `googleDialogflowCxTool` Submodule <a name="`googleDialogflowCxTool` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxTool <a name="GoogleDialogflowCxTool" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool google_dialogflow_cx_tool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxTool;

GoogleDialogflowCxTool.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .dataStoreSpec(GoogleDialogflowCxToolDataStoreSpec)
//  .functionSpec(GoogleDialogflowCxToolFunctionSpec)
//  .id(java.lang.String)
//  .openApiSpec(GoogleDialogflowCxToolOpenApiSpec)
//  .parent(java.lang.String)
//  .timeouts(GoogleDialogflowCxToolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.functionSpec">functionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

##### `dataStoreSpec`<sup>Optional</sup> <a name="dataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dataStoreSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.functionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.openApiSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec">putDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec">resetDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataStoreSpec` <a name="putDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec"></a>

```java
public void putDataStoreSpec(GoogleDialogflowCxToolDataStoreSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec"></a>

```java
public void putFunctionSpec(GoogleDialogflowCxToolFunctionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec"></a>

```java
public void putOpenApiSpec(GoogleDialogflowCxToolOpenApiSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxToolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---

##### `resetDataStoreSpec` <a name="resetDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec"></a>

```java
public void resetDataStoreSpec()
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec"></a>

```java
public void resetFunctionSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId"></a>

```java
public void resetId()
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec"></a>

```java
public void resetOpenApiSpec()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxTool;

GoogleDialogflowCxTool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxTool;

GoogleDialogflowCxTool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxTool;

GoogleDialogflowCxTool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxTool;

GoogleDialogflowCxTool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxTool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType">toolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput">dataStoreSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataStoreSpec`<sup>Required</sup> <a name="dataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecOutputReference getDataStoreSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a>

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec"></a>

```java
public GoogleDialogflowCxToolFunctionSpecOutputReference getFunctionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecOutputReference getOpenApiSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts"></a>

```java
public GoogleDialogflowCxToolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a>

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType"></a>

```java
public java.lang.String getToolType();
```

- *Type:* java.lang.String

---

##### `dataStoreSpecInput`<sup>Optional</sup> <a name="dataStoreSpecInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput"></a>

```java
public GoogleDialogflowCxToolDataStoreSpec getDataStoreSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput"></a>

```java
public GoogleDialogflowCxToolFunctionSpec getFunctionSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpec getOpenApiSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolConfig <a name="GoogleDialogflowCxToolConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolConfig;

GoogleDialogflowCxToolConfig.builder()
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
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .dataStoreSpec(GoogleDialogflowCxToolDataStoreSpec)
//  .functionSpec(GoogleDialogflowCxToolFunctionSpec)
//  .id(java.lang.String)
//  .openApiSpec(GoogleDialogflowCxToolOpenApiSpec)
//  .parent(java.lang.String)
//  .timeouts(GoogleDialogflowCxToolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description">description</a></code> | <code>java.lang.String</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

##### `dataStoreSpec`<sup>Optional</sup> <a name="dataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec"></a>

```java
public GoogleDialogflowCxToolDataStoreSpec getDataStoreSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec"></a>

```java
public GoogleDialogflowCxToolFunctionSpec getFunctionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec"></a>

```java
public GoogleDialogflowCxToolOpenApiSpec getOpenApiSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxToolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}

---

### GoogleDialogflowCxToolDataStoreSpec <a name="GoogleDialogflowCxToolDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpec;

GoogleDialogflowCxToolDataStoreSpec.builder()
    .dataStoreConnections(IResolvable)
    .dataStoreConnections(java.util.List<GoogleDialogflowCxToolDataStoreSpecDataStoreConnections>)
    .fallbackPrompt(GoogleDialogflowCxToolDataStoreSpecFallbackPrompt)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections">dataStoreConnections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>></code> | data_store_connections block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections"></a>

```java
public java.lang.Object getDataStoreConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>>

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#data_store_connections GoogleDialogflowCxTool#data_store_connections}

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecFallbackPrompt getFallbackPrompt();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#fallback_prompt GoogleDialogflowCxTool#fallback_prompt}

---

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections;

GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.builder()
//  .dataStore(java.lang.String)
//  .dataStoreType(java.lang.String)
//  .documentProcessingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType">dataStoreType</a></code> | <code>java.lang.String</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">documentProcessingMode</a></code> | <code>java.lang.String</code> | The document processing mode for the data store connection. |

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#data_store GoogleDialogflowCxTool#data_store}

---

##### `dataStoreType`<sup>Optional</sup> <a name="dataStoreType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```java
public java.lang.String getDataStoreType();
```

- *Type:* java.lang.String

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#data_store_type GoogleDialogflowCxTool#data_store_type}

---

##### `documentProcessingMode`<sup>Optional</sup> <a name="documentProcessingMode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```java
public java.lang.String getDocumentProcessingMode();
```

- *Type:* java.lang.String

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#document_processing_mode GoogleDialogflowCxTool#document_processing_mode}

---

### GoogleDialogflowCxToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt;

GoogleDialogflowCxToolDataStoreSpecFallbackPrompt.builder()
    .build();
```


### GoogleDialogflowCxToolFunctionSpec <a name="GoogleDialogflowCxToolFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolFunctionSpec;

GoogleDialogflowCxToolFunctionSpec.builder()
//  .inputSchema(java.lang.String)
//  .outputSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema"></a>

```java
public java.lang.String getInputSchema();
```

- *Type:* java.lang.String

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#input_schema GoogleDialogflowCxTool#input_schema}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema"></a>

```java
public java.lang.String getOutputSchema();
```

- *Type:* java.lang.String

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#output_schema GoogleDialogflowCxTool#output_schema}

---

### GoogleDialogflowCxToolOpenApiSpec <a name="GoogleDialogflowCxToolOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpec;

GoogleDialogflowCxToolOpenApiSpec.builder()
    .textSchema(java.lang.String)
//  .authentication(GoogleDialogflowCxToolOpenApiSpecAuthentication)
//  .serviceDirectoryConfig(GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig)
//  .tlsConfig(GoogleDialogflowCxToolOpenApiSpecTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>java.lang.String</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema"></a>

```java
public java.lang.String getTextSchema();
```

- *Type:* java.lang.String

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#text_schema GoogleDialogflowCxTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#authentication GoogleDialogflowCxTool#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#service_directory_config GoogleDialogflowCxTool#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#tls_config GoogleDialogflowCxTool#tls_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolOpenApiSpecAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthentication;

GoogleDialogflowCxToolOpenApiSpecAuthentication.builder()
//  .apiKeyConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig)
//  .bearerTokenConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig)
//  .oauthConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig)
//  .serviceAgentAuthConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#api_key_config GoogleDialogflowCxTool#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#bearer_token_config GoogleDialogflowCxTool#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#oauth_config GoogleDialogflowCxTool#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig getServiceAgentAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#service_agent_auth_config GoogleDialogflowCxTool#service_agent_auth_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig;

GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.builder()
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
//  .apiKey(java.lang.String)
//  .secretVersionForApiKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#key_name GoogleDialogflowCxTool#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#request_location GoogleDialogflowCxTool#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#api_key GoogleDialogflowCxTool#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```java
public java.lang.String getSecretVersionForApiKey();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#secret_version_for_api_key GoogleDialogflowCxTool#secret_version_for_api_key}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig;

GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.builder()
//  .secretVersionForToken(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```java
public java.lang.String getSecretVersionForToken();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#secret_version_for_token GoogleDialogflowCxTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#token GoogleDialogflowCxTool#token}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig;

GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .clientSecret(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretVersionForClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#client_id GoogleDialogflowCxTool#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#oauth_grant_type GoogleDialogflowCxTool#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#token_endpoint GoogleDialogflowCxTool#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#client_secret GoogleDialogflowCxTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#scopes GoogleDialogflowCxTool#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```java
public java.lang.String getSecretVersionForClientSecret();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#secret_version_for_client_secret GoogleDialogflowCxTool#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig;

GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.builder()
//  .serviceAgentAuth(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```java
public java.lang.String getServiceAgentAuth();
```

- *Type:* java.lang.String

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#service_agent_auth GoogleDialogflowCxTool#service_agent_auth}

---

### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig;

GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#service GoogleDialogflowCxTool#service}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecTlsConfig;

GoogleDialogflowCxToolOpenApiSpecTlsConfig.builder()
    .caCerts(IResolvable)
    .caCerts(java.util.List<GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>></code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts"></a>

```java
public java.lang.Object getCaCerts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>>

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#ca_certs GoogleDialogflowCxTool#ca_certs}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts;

GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.builder()
    .cert(java.lang.String)
    .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>java.lang.String</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:

```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#cert GoogleDialogflowCxTool#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

### GoogleDialogflowCxToolTimeouts <a name="GoogleDialogflowCxToolTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolTimeouts;

GoogleDialogflowCxToolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList;

new GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>>

---


### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference;

new GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">resetDataStoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">resetDocumentProcessingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataStore` <a name="resetDataStore" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```java
public void resetDataStore()
```

##### `resetDataStoreType` <a name="resetDataStoreType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```java
public void resetDataStoreType()
```

##### `resetDocumentProcessingMode` <a name="resetDocumentProcessingMode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```java
public void resetDocumentProcessingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">documentProcessingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">documentProcessingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```java
public java.lang.String getDataStoreTypeInput();
```

- *Type:* java.lang.String

---

##### `documentProcessingModeInput`<sup>Optional</sup> <a name="documentProcessingModeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```java
public java.lang.String getDocumentProcessingModeInput();
```

- *Type:* java.lang.String

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```java
public java.lang.String getDataStoreType();
```

- *Type:* java.lang.String

---

##### `documentProcessingMode`<sup>Required</sup> <a name="documentProcessingMode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```java
public java.lang.String getDocumentProcessingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>

---


### GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference;

new GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecFallbackPrompt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolDataStoreSpecOutputReference;

new GoogleDialogflowCxToolDataStoreSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections">putDataStoreConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt">putFallbackPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreConnections` <a name="putDataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```java
public void putDataStoreConnections(IResolvable OR java.util.List<GoogleDialogflowCxToolDataStoreSpecDataStoreConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>>

---

##### `putFallbackPrompt` <a name="putFallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```java
public void putFallbackPrompt(GoogleDialogflowCxToolDataStoreSpecFallbackPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections">dataStoreConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">dataStoreConnectionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput">fallbackPromptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList getDataStoreConnections();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference getFallbackPrompt();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `dataStoreConnectionsInput`<sup>Optional</sup> <a name="dataStoreConnectionsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```java
public java.lang.Object getDataStoreConnectionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>>

---

##### `fallbackPromptInput`<sup>Optional</sup> <a name="fallbackPromptInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```java
public GoogleDialogflowCxToolDataStoreSpecFallbackPrompt getFallbackPromptInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolDataStoreSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolFunctionSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolFunctionSpecOutputReference;

new GoogleDialogflowCxToolFunctionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema"></a>

```java
public void resetInputSchema()
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema"></a>

```java
public void resetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```java
public java.lang.String getInputSchemaInput();
```

- *Type:* java.lang.String

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```java
public java.lang.String getOutputSchemaInput();
```

- *Type:* java.lang.String

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema"></a>

```java
public java.lang.String getInputSchema();
```

- *Type:* java.lang.String

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema"></a>

```java
public java.lang.String getOutputSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolFunctionSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```java
public void resetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```java
public java.lang.String getSecretVersionForApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```java
public java.lang.String getSecretVersionForApiKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```java
public void resetSecretVersionForToken()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```java
public java.lang.String getSecretVersionForTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```java
public java.lang.String getSecretVersionForToken();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```java
public void resetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```java
public java.lang.String getSecretVersionForClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```java
public java.lang.String getSecretVersionForClientSecret();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```java
public void putServiceAgentAuthConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```java
public void resetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference getServiceAgentAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig getServiceAgentAuthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```java
public void resetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```java
public java.lang.String getServiceAgentAuthInput();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```java
public java.lang.String getServiceAgentAuth();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecOutputReference;

new GoogleDialogflowCxToolOpenApiSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication"></a>

```java
public void putAuthentication(GoogleDialogflowCxToolOpenApiSpecAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(GoogleDialogflowCxToolOpenApiSpecTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecAuthentication getAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```java
public java.lang.String getTextSchemaInput();
```

- *Type:* java.lang.String

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema"></a>

```java
public java.lang.String getTextSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference;

new GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```java
public void putCaCerts(IResolvable OR java.util.List<GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList getCaCerts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```java
public java.lang.Object getCaCertsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolOpenApiSpecTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolTimeoutsOutputReference <a name="GoogleDialogflowCxToolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_tool.GoogleDialogflowCxToolTimeoutsOutputReference;

new GoogleDialogflowCxToolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---



