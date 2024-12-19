# `googleDiscoveryEngineChatEngine` Submodule <a name="`googleDiscoveryEngineChatEngine` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineChatEngine <a name="GoogleDiscoveryEngineChatEngine" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine google_discovery_engine_chat_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngine;

GoogleDiscoveryEngineChatEngine.Builder.create(Construct scope, java.lang.String id)
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
    .chatEngineConfig(GoogleDiscoveryEngineChatEngineChatEngineConfig)
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .commonConfig(GoogleDiscoveryEngineChatEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineChatEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.chatEngineConfig">chatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `chatEngineConfig`<sup>Required</sup> <a name="chatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.chatEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#chat_engine_config GoogleDiscoveryEngineChatEngine#chat_engine_config}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#collection_id GoogleDiscoveryEngineChatEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'. Adding or removing data stores will force recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#data_store_ids GoogleDiscoveryEngineChatEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#display_name GoogleDiscoveryEngineChatEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#engine_id GoogleDiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#common_config GoogleDiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#industry_vertical GoogleDiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#timeouts GoogleDiscoveryEngineChatEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig">putChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChatEngineConfig` <a name="putChatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig"></a>

```java
public void putChatEngineConfig(GoogleDiscoveryEngineChatEngineChatEngineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putCommonConfig"></a>

```java
public void putCommonConfig(GoogleDiscoveryEngineChatEngineCommonConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineChatEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

---

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetCommonConfig"></a>

```java
public void resetCommonConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetId"></a>

```java
public void resetId()
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetIndustryVertical"></a>

```java
public void resetIndustryVertical()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngine;

GoogleDiscoveryEngineChatEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngine;

GoogleDiscoveryEngineChatEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngine;

GoogleDiscoveryEngineChatEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngine;

GoogleDiscoveryEngineChatEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineChatEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineChatEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineChatEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineChatEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfig">chatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineMetadata">chatEngineMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList">GoogleDiscoveryEngineChatEngineChatEngineMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference">GoogleDiscoveryEngineChatEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference">GoogleDiscoveryEngineChatEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfigInput">chatEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `chatEngineConfig`<sup>Required</sup> <a name="chatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfig"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference getChatEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference</a>

---

##### `chatEngineMetadata`<sup>Required</sup> <a name="chatEngineMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineMetadata"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineMetadataList getChatEngineMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList">GoogleDiscoveryEngineChatEngineChatEngineMetadataList</a>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfig"></a>

```java
public GoogleDiscoveryEngineChatEngineCommonConfigOutputReference getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference">GoogleDiscoveryEngineChatEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeouts"></a>

```java
public GoogleDiscoveryEngineChatEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference">GoogleDiscoveryEngineChatEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `chatEngineConfigInput`<sup>Optional</sup> <a name="chatEngineConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfigInput"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfig getChatEngineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfigInput"></a>

```java
public GoogleDiscoveryEngineChatEngineCommonConfig getCommonConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getDataStoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineChatEngineChatEngineConfig <a name="GoogleDiscoveryEngineChatEngineChatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineConfig;

GoogleDiscoveryEngineChatEngineChatEngineConfig.builder()
//  .agentCreationConfig(GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig)
//  .dialogflowAgentToLink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig">agentCreationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | agent_creation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink">dialogflowAgentToLink</a></code> | <code>java.lang.String</code> | The resource name of an existing Dialogflow agent to link to this Chat Engine. |

---

##### `agentCreationConfig`<sup>Optional</sup> <a name="agentCreationConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig getAgentCreationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#agent_creation_config GoogleDiscoveryEngineChatEngine#agent_creation_config}

---

##### `dialogflowAgentToLink`<sup>Optional</sup> <a name="dialogflowAgentToLink" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink"></a>

```java
public java.lang.String getDialogflowAgentToLink();
```

- *Type:* java.lang.String

The resource name of an existing Dialogflow agent to link to this Chat Engine.

Format: 'projects/<Project_ID>/locations/<Location_ID>/agents/<Agent_ID>'.
Exactly one of 'agent_creation_config' or 'dialogflow_agent_to_link' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#dialogflow_agent_to_link GoogleDiscoveryEngineChatEngine#dialogflow_agent_to_link}

---

### GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig <a name="GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig;

GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.builder()
    .defaultLanguageCode(java.lang.String)
    .timeZone(java.lang.String)
//  .business(java.lang.String)
//  .location(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>java.lang.String</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business">business</a></code> | <code>java.lang.String</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine. |

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode"></a>

```java
public java.lang.String getDefaultLanguageCode();
```

- *Type:* java.lang.String

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#default_language_code GoogleDiscoveryEngineChatEngine#default_language_code}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#time_zone GoogleDiscoveryEngineChatEngine#time_zone}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business"></a>

```java
public java.lang.String getBusiness();
```

- *Type:* java.lang.String

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#business GoogleDiscoveryEngineChatEngine#business}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

### GoogleDiscoveryEngineChatEngineChatEngineMetadata <a name="GoogleDiscoveryEngineChatEngineChatEngineMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineMetadata;

GoogleDiscoveryEngineChatEngineChatEngineMetadata.builder()
    .build();
```


### GoogleDiscoveryEngineChatEngineCommonConfig <a name="GoogleDiscoveryEngineChatEngineCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineCommonConfig;

GoogleDiscoveryEngineChatEngineCommonConfig.builder()
//  .companyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#company_name GoogleDiscoveryEngineChatEngine#company_name}

---

### GoogleDiscoveryEngineChatEngineConfig <a name="GoogleDiscoveryEngineChatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineConfig;

GoogleDiscoveryEngineChatEngineConfig.builder()
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
    .chatEngineConfig(GoogleDiscoveryEngineChatEngineChatEngineConfig)
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .commonConfig(GoogleDiscoveryEngineChatEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineChatEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.chatEngineConfig">chatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `chatEngineConfig`<sup>Required</sup> <a name="chatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.chatEngineConfig"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfig getChatEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#chat_engine_config GoogleDiscoveryEngineChatEngine#chat_engine_config}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#collection_id GoogleDiscoveryEngineChatEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'. Adding or removing data stores will force recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#data_store_ids GoogleDiscoveryEngineChatEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#display_name GoogleDiscoveryEngineChatEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#engine_id GoogleDiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.commonConfig"></a>

```java
public GoogleDiscoveryEngineChatEngineCommonConfig getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#common_config GoogleDiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#industry_vertical GoogleDiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineChatEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#timeouts GoogleDiscoveryEngineChatEngine#timeouts}

---

### GoogleDiscoveryEngineChatEngineTimeouts <a name="GoogleDiscoveryEngineChatEngineTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineTimeouts;

GoogleDiscoveryEngineChatEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#create GoogleDiscoveryEngineChatEngine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#delete GoogleDiscoveryEngineChatEngine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#update GoogleDiscoveryEngineChatEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#create GoogleDiscoveryEngineChatEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#delete GoogleDiscoveryEngineChatEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_discovery_engine_chat_engine#update GoogleDiscoveryEngineChatEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference <a name="GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference;

new GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness">resetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBusiness` <a name="resetBusiness" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness"></a>

```java
public void resetBusiness()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation"></a>

```java
public void resetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput">businessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business">business</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessInput`<sup>Optional</sup> <a name="businessInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput"></a>

```java
public java.lang.String getBusinessInput();
```

- *Type:* java.lang.String

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput"></a>

```java
public java.lang.String getDefaultLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business"></a>

```java
public java.lang.String getBusiness();
```

- *Type:* java.lang.String

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode"></a>

```java
public java.lang.String getDefaultLanguageCode();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---


### GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference <a name="GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference;

new GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig">putAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig">resetAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink">resetDialogflowAgentToLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCreationConfig` <a name="putAgentCreationConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig"></a>

```java
public void putAgentCreationConfig(GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `resetAgentCreationConfig` <a name="resetAgentCreationConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig"></a>

```java
public void resetAgentCreationConfig()
```

##### `resetDialogflowAgentToLink` <a name="resetDialogflowAgentToLink" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink"></a>

```java
public void resetDialogflowAgentToLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig">agentCreationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput">agentCreationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput">dialogflowAgentToLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink">dialogflowAgentToLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentCreationConfig`<sup>Required</sup> <a name="agentCreationConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference getAgentCreationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a>

---

##### `agentCreationConfigInput`<sup>Optional</sup> <a name="agentCreationConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig getAgentCreationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `dialogflowAgentToLinkInput`<sup>Optional</sup> <a name="dialogflowAgentToLinkInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput"></a>

```java
public java.lang.String getDialogflowAgentToLinkInput();
```

- *Type:* java.lang.String

---

##### `dialogflowAgentToLink`<sup>Required</sup> <a name="dialogflowAgentToLink" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink"></a>

```java
public java.lang.String getDialogflowAgentToLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

---


### GoogleDiscoveryEngineChatEngineChatEngineMetadataList <a name="GoogleDiscoveryEngineChatEngineChatEngineMetadataList" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList;

new GoogleDiscoveryEngineChatEngineChatEngineMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.get"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference <a name="GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference;

new GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent">dialogflowAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata">GoogleDiscoveryEngineChatEngineChatEngineMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dialogflowAgent`<sup>Required</sup> <a name="dialogflowAgent" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent"></a>

```java
public java.lang.String getDialogflowAgent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineChatEngineChatEngineMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata">GoogleDiscoveryEngineChatEngineChatEngineMetadata</a>

---


### GoogleDiscoveryEngineChatEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineChatEngineCommonConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference;

new GoogleDiscoveryEngineChatEngineCommonConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineChatEngineCommonConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

---


### GoogleDiscoveryEngineChatEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineChatEngineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_chat_engine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference;

new GoogleDiscoveryEngineChatEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

---



