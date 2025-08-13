# `googleDiscoveryEngineRecommendationEngine` Submodule <a name="`googleDiscoveryEngineRecommendationEngine` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineRecommendationEngine <a name="GoogleDiscoveryEngineRecommendationEngine" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngine;

GoogleDiscoveryEngineRecommendationEngine.Builder.create(Construct scope, java.lang.String id)
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
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .commonConfig(GoogleDiscoveryEngineRecommendationEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .mediaRecommendationEngineConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineRecommendationEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#data_store_ids GoogleDiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#display_name GoogleDiscoveryEngineRecommendationEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#engine_id GoogleDiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#location GoogleDiscoveryEngineRecommendationEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#common_config GoogleDiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#industry_vertical GoogleDiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `mediaRecommendationEngineConfig`<sup>Optional</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.mediaRecommendationEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#media_recommendation_engine_config GoogleDiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#timeouts GoogleDiscoveryEngineRecommendationEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig">putMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig">resetMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putCommonConfig"></a>

```java
public void putCommonConfig(GoogleDiscoveryEngineRecommendationEngineCommonConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `putMediaRecommendationEngineConfig` <a name="putMediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig"></a>

```java
public void putMediaRecommendationEngineConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineRecommendationEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetCommonConfig"></a>

```java
public void resetCommonConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetId"></a>

```java
public void resetId()
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetIndustryVertical"></a>

```java
public void resetIndustryVertical()
```

##### `resetMediaRecommendationEngineConfig` <a name="resetMediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig"></a>

```java
public void resetMediaRecommendationEngineConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngine;

GoogleDiscoveryEngineRecommendationEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngine;

GoogleDiscoveryEngineRecommendationEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngine;

GoogleDiscoveryEngineRecommendationEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngine;

GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineRecommendationEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineRecommendationEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineRecommendationEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference">GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput">mediaRecommendationEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `mediaRecommendationEngineConfig`<sup>Required</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference getMediaRecommendationEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeouts"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference">GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfigInput"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineCommonConfig getCommonConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getDataStoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mediaRecommendationEngineConfigInput`<sup>Optional</sup> <a name="mediaRecommendationEngineConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig getMediaRecommendationEngineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineRecommendationEngineCommonConfig <a name="GoogleDiscoveryEngineRecommendationEngineCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineCommonConfig;

GoogleDiscoveryEngineRecommendationEngineCommonConfig.builder()
//  .companyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#company_name GoogleDiscoveryEngineRecommendationEngine#company_name}

---

### GoogleDiscoveryEngineRecommendationEngineConfig <a name="GoogleDiscoveryEngineRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineConfig;

GoogleDiscoveryEngineRecommendationEngineConfig.builder()
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
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .commonConfig(GoogleDiscoveryEngineRecommendationEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .mediaRecommendationEngineConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineRecommendationEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#data_store_ids GoogleDiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#display_name GoogleDiscoveryEngineRecommendationEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#engine_id GoogleDiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#location GoogleDiscoveryEngineRecommendationEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.commonConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineCommonConfig getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#common_config GoogleDiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#industry_vertical GoogleDiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `mediaRecommendationEngineConfig`<sup>Optional</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig getMediaRecommendationEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#media_recommendation_engine_config GoogleDiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#timeouts GoogleDiscoveryEngineRecommendationEngine#timeouts}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;

GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.builder()
//  .engineFeaturesConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig)
//  .optimizationObjective(java.lang.String)
//  .optimizationObjectiveConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig)
//  .trainingState(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig">engineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | engine_features_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective">optimizationObjective</a></code> | <code>java.lang.String</code> | The optimization objective. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig">optimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | optimization_objective_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState">trainingState</a></code> | <code>java.lang.String</code> | The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of engine. |

---

##### `engineFeaturesConfig`<sup>Optional</sup> <a name="engineFeaturesConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig getEngineFeaturesConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

engine_features_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#engine_features_config GoogleDiscoveryEngineRecommendationEngine#engine_features_config}

---

##### `optimizationObjective`<sup>Optional</sup> <a name="optimizationObjective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective"></a>

```java
public java.lang.String getOptimizationObjective();
```

- *Type:* java.lang.String

The optimization objective.

e.g., 'cvr'.
This field together with MediaRecommendationEngineConfig.type describes
engine metadata to use to control engine training and serving.
Currently supported values: 'ctr', 'cvr'.
If not specified, we choose default based on engine type. Default depends on type of recommendation:
'recommended-for-you' => 'ctr'
'others-you-may-like' => 'ctr'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective GoogleDiscoveryEngineRecommendationEngine#optimization_objective}

---

##### `optimizationObjectiveConfig`<sup>Optional</sup> <a name="optimizationObjectiveConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig getOptimizationObjectiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

optimization_objective_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective_config GoogleDiscoveryEngineRecommendationEngine#optimization_objective_config}

---

##### `trainingState`<sup>Optional</sup> <a name="trainingState" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState"></a>

```java
public java.lang.String getTrainingState();
```

- *Type:* java.lang.String

The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#training_state GoogleDiscoveryEngineRecommendationEngine#training_state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of engine.

e.g., 'recommended-for-you'.
This field together with MediaRecommendationEngineConfig.optimizationObjective describes
engine metadata to use to control engine training and serving.
Currently supported values: 'recommended-for-you', 'others-you-may-like',
'more-like-this', 'most-popular-items'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#type GoogleDiscoveryEngineRecommendationEngine#type}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;

GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.builder()
//  .mostPopularConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig)
//  .recommendedForYouConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig">mostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | most_popular_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig">recommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | recommended_for_you_config block. |

---

##### `mostPopularConfig`<sup>Optional</sup> <a name="mostPopularConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig getMostPopularConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

most_popular_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#most_popular_config GoogleDiscoveryEngineRecommendationEngine#most_popular_config}

---

##### `recommendedForYouConfig`<sup>Optional</sup> <a name="recommendedForYouConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig getRecommendedForYouConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

recommended_for_you_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#recommended_for_you_config GoogleDiscoveryEngineRecommendationEngine#recommended_for_you_config}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;

GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.builder()
//  .timeWindowDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays">timeWindowDays</a></code> | <code>java.lang.Number</code> | The time window of which the engine is queried at training and prediction time. |

---

##### `timeWindowDays`<sup>Optional</sup> <a name="timeWindowDays" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays"></a>

```java
public java.lang.Number getTimeWindowDays();
```

- *Type:* java.lang.Number

The time window of which the engine is queried at training and prediction time.

Positive integers only. The value translates to the
last X days of events. Currently required for the 'most-popular-items'
engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#time_window_days GoogleDiscoveryEngineRecommendationEngine#time_window_days}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;

GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.builder()
//  .contextEventType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType">contextEventType</a></code> | <code>java.lang.String</code> | The type of event with which the engine is queried at prediction time. |

---

##### `contextEventType`<sup>Optional</sup> <a name="contextEventType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType"></a>

```java
public java.lang.String getContextEventType();
```

- *Type:* java.lang.String

The type of event with which the engine is queried at prediction time.

If set to 'generic', only 'view-item', 'media-play',and
'media-complete' will be used as 'context-event' in engine training. If
set to 'view-home-page', 'view-home-page' will also be used as
'context-events' in addition to 'view-item', 'media-play', and
'media-complete'. Currently supported for the 'recommended-for-you'
engine. Currently supported values: 'view-home-page', 'generic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#context_event_type GoogleDiscoveryEngineRecommendationEngine#context_event_type}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;

GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.builder()
//  .targetField(java.lang.String)
//  .targetFieldValueFloat(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField">targetField</a></code> | <code>java.lang.String</code> | The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat">targetFieldValueFloat</a></code> | <code>java.lang.Number</code> | The threshold to be applied to the target (e.g., 0.5). |

---

##### `targetField`<sup>Optional</sup> <a name="targetField" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField"></a>

```java
public java.lang.String getTargetField();
```

- *Type:* java.lang.String

The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#target_field GoogleDiscoveryEngineRecommendationEngine#target_field}

---

##### `targetFieldValueFloat`<sup>Optional</sup> <a name="targetFieldValueFloat" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat"></a>

```java
public java.lang.Number getTargetFieldValueFloat();
```

- *Type:* java.lang.Number

The threshold to be applied to the target (e.g., 0.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#target_field_value_float GoogleDiscoveryEngineRecommendationEngine#target_field_value_float}

---

### GoogleDiscoveryEngineRecommendationEngineTimeouts <a name="GoogleDiscoveryEngineRecommendationEngineTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineTimeouts;

GoogleDiscoveryEngineRecommendationEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#create GoogleDiscoveryEngineRecommendationEngine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#delete GoogleDiscoveryEngineRecommendationEngine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#update GoogleDiscoveryEngineRecommendationEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#create GoogleDiscoveryEngineRecommendationEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#delete GoogleDiscoveryEngineRecommendationEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_recommendation_engine#update GoogleDiscoveryEngineRecommendationEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference;

new GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineCommonConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference;

new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays">resetTimeWindowDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeWindowDays` <a name="resetTimeWindowDays" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays"></a>

```java
public void resetTimeWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput">timeWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays">timeWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeWindowDaysInput`<sup>Optional</sup> <a name="timeWindowDaysInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput"></a>

```java
public java.lang.Number getTimeWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowDays`<sup>Required</sup> <a name="timeWindowDays" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays"></a>

```java
public java.lang.Number getTimeWindowDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference;

new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig">putMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig">putRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig">resetMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig">resetRecommendedForYouConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMostPopularConfig` <a name="putMostPopularConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig"></a>

```java
public void putMostPopularConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `putRecommendedForYouConfig` <a name="putRecommendedForYouConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig"></a>

```java
public void putRecommendedForYouConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `resetMostPopularConfig` <a name="resetMostPopularConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig"></a>

```java
public void resetMostPopularConfig()
```

##### `resetRecommendedForYouConfig` <a name="resetRecommendedForYouConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig"></a>

```java
public void resetRecommendedForYouConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig">mostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig">recommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput">mostPopularConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput">recommendedForYouConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mostPopularConfig`<sup>Required</sup> <a name="mostPopularConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference getMostPopularConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a>

---

##### `recommendedForYouConfig`<sup>Required</sup> <a name="recommendedForYouConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference getRecommendedForYouConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a>

---

##### `mostPopularConfigInput`<sup>Optional</sup> <a name="mostPopularConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig getMostPopularConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `recommendedForYouConfigInput`<sup>Optional</sup> <a name="recommendedForYouConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig getRecommendedForYouConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference;

new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType">resetContextEventType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextEventType` <a name="resetContextEventType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType"></a>

```java
public void resetContextEventType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput">contextEventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType">contextEventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextEventTypeInput`<sup>Optional</sup> <a name="contextEventTypeInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput"></a>

```java
public java.lang.String getContextEventTypeInput();
```

- *Type:* java.lang.String

---

##### `contextEventType`<sup>Required</sup> <a name="contextEventType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType"></a>

```java
public java.lang.String getContextEventType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference;

new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField">resetTargetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat">resetTargetFieldValueFloat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetField` <a name="resetTargetField" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField"></a>

```java
public void resetTargetField()
```

##### `resetTargetFieldValueFloat` <a name="resetTargetFieldValueFloat" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat"></a>

```java
public void resetTargetFieldValueFloat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput">targetFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput">targetFieldValueFloatInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField">targetField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat">targetFieldValueFloat</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetFieldInput`<sup>Optional</sup> <a name="targetFieldInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput"></a>

```java
public java.lang.String getTargetFieldInput();
```

- *Type:* java.lang.String

---

##### `targetFieldValueFloatInput`<sup>Optional</sup> <a name="targetFieldValueFloatInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput"></a>

```java
public java.lang.Number getTargetFieldValueFloatInput();
```

- *Type:* java.lang.Number

---

##### `targetField`<sup>Required</sup> <a name="targetField" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField"></a>

```java
public java.lang.String getTargetField();
```

- *Type:* java.lang.String

---

##### `targetFieldValueFloat`<sup>Required</sup> <a name="targetFieldValueFloat" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat"></a>

```java
public java.lang.Number getTargetFieldValueFloat();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference;

new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig">putEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig">putOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig">resetEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective">resetOptimizationObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig">resetOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState">resetTrainingState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEngineFeaturesConfig` <a name="putEngineFeaturesConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig"></a>

```java
public void putEngineFeaturesConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `putOptimizationObjectiveConfig` <a name="putOptimizationObjectiveConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig"></a>

```java
public void putOptimizationObjectiveConfig(GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `resetEngineFeaturesConfig` <a name="resetEngineFeaturesConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig"></a>

```java
public void resetEngineFeaturesConfig()
```

##### `resetOptimizationObjective` <a name="resetOptimizationObjective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective"></a>

```java
public void resetOptimizationObjective()
```

##### `resetOptimizationObjectiveConfig` <a name="resetOptimizationObjectiveConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig"></a>

```java
public void resetOptimizationObjectiveConfig()
```

##### `resetTrainingState` <a name="resetTrainingState" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState"></a>

```java
public void resetTrainingState()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig">engineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig">optimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput">engineFeaturesConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput">optimizationObjectiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput">optimizationObjectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput">trainingStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective">optimizationObjective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState">trainingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engineFeaturesConfig`<sup>Required</sup> <a name="engineFeaturesConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference getEngineFeaturesConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a>

---

##### `optimizationObjectiveConfig`<sup>Required</sup> <a name="optimizationObjectiveConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference getOptimizationObjectiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a>

---

##### `engineFeaturesConfigInput`<sup>Optional</sup> <a name="engineFeaturesConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig getEngineFeaturesConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `optimizationObjectiveConfigInput`<sup>Optional</sup> <a name="optimizationObjectiveConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig getOptimizationObjectiveConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `optimizationObjectiveInput`<sup>Optional</sup> <a name="optimizationObjectiveInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput"></a>

```java
public java.lang.String getOptimizationObjectiveInput();
```

- *Type:* java.lang.String

---

##### `trainingStateInput`<sup>Optional</sup> <a name="trainingStateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput"></a>

```java
public java.lang.String getTrainingStateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `optimizationObjective`<sup>Required</sup> <a name="optimizationObjective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective"></a>

```java
public java.lang.String getOptimizationObjective();
```

- *Type:* java.lang.String

---

##### `trainingState`<sup>Required</sup> <a name="trainingState" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState"></a>

```java
public java.lang.String getTrainingState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_recommendation_engine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference;

new GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

---



