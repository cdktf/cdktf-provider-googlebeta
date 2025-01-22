# `googleVertexAiFeatureOnlineStore` Submodule <a name="`googleVertexAiFeatureOnlineStore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStore <a name="GoogleVertexAiFeatureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store google_vertex_ai_feature_online_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStore;

GoogleVertexAiFeatureOnlineStore.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .bigtable(GoogleVertexAiFeatureOnlineStoreBigtable)
//  .dedicatedServingEndpoint(GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint)
//  .embeddingManagement(GoogleVertexAiFeatureOnlineStoreEmbeddingManagement)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .optimized(GoogleVertexAiFeatureOnlineStoreOptimized)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiFeatureOnlineStoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.bigtable">bigtable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dedicatedServingEndpoint">dedicatedServingEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.embeddingManagement">embeddingManagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | embedding_management block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.optimized">optimized</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#name GoogleVertexAiFeatureOnlineStore#name}

---

##### `bigtable`<sup>Optional</sup> <a name="bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.bigtable"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#bigtable GoogleVertexAiFeatureOnlineStore#bigtable}

---

##### `dedicatedServingEndpoint`<sup>Optional</sup> <a name="dedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.dedicatedServingEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#dedicated_serving_endpoint GoogleVertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `embeddingManagement`<sup>Optional</sup> <a name="embeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.embeddingManagement"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

embedding_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#embedding_management GoogleVertexAiFeatureOnlineStore#embedding_management}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#force_destroy GoogleVertexAiFeatureOnlineStore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#labels GoogleVertexAiFeatureOnlineStore#labels}

---

##### `optimized`<sup>Optional</sup> <a name="optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.optimized"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#optimized GoogleVertexAiFeatureOnlineStore#optimized}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#region GoogleVertexAiFeatureOnlineStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#timeouts GoogleVertexAiFeatureOnlineStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putBigtable">putBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putDedicatedServingEndpoint">putDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putEmbeddingManagement">putEmbeddingManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putOptimized">putOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetBigtable">resetBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetDedicatedServingEndpoint">resetDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetEmbeddingManagement">resetEmbeddingManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOptimized">resetOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigtable` <a name="putBigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putBigtable"></a>

```java
public void putBigtable(GoogleVertexAiFeatureOnlineStoreBigtable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putBigtable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

---

##### `putDedicatedServingEndpoint` <a name="putDedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putDedicatedServingEndpoint"></a>

```java
public void putDedicatedServingEndpoint(GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putDedicatedServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `putEmbeddingManagement` <a name="putEmbeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putEmbeddingManagement"></a>

```java
public void putEmbeddingManagement(GoogleVertexAiFeatureOnlineStoreEmbeddingManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putEmbeddingManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

---

##### `putOptimized` <a name="putOptimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putOptimized"></a>

```java
public void putOptimized(GoogleVertexAiFeatureOnlineStoreOptimized value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putOptimized.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiFeatureOnlineStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

---

##### `resetBigtable` <a name="resetBigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetBigtable"></a>

```java
public void resetBigtable()
```

##### `resetDedicatedServingEndpoint` <a name="resetDedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetDedicatedServingEndpoint"></a>

```java
public void resetDedicatedServingEndpoint()
```

##### `resetEmbeddingManagement` <a name="resetEmbeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetEmbeddingManagement"></a>

```java
public void resetEmbeddingManagement()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOptimized` <a name="resetOptimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetOptimized"></a>

```java
public void resetOptimized()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStore;

GoogleVertexAiFeatureOnlineStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStore;

GoogleVertexAiFeatureOnlineStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStore;

GoogleVertexAiFeatureOnlineStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStore;

GoogleVertexAiFeatureOnlineStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiFeatureOnlineStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiFeatureOnlineStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtable">bigtable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpoint">dedicatedServingEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagement">embeddingManagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference">GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimized">optimized</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference">GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtableInput">bigtableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput">dedicatedServingEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagementInput">embeddingManagementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimizedInput">optimizedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigtable`<sup>Required</sup> <a name="bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtable"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtableOutputReference getBigtable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dedicatedServingEndpoint`<sup>Required</sup> <a name="dedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpoint"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference getDedicatedServingEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `embeddingManagement`<sup>Required</sup> <a name="embeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagement"></a>

```java
public GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference getEmbeddingManagement();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference">GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `optimized`<sup>Required</sup> <a name="optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimized"></a>

```java
public GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference getOptimized();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference">GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeouts"></a>

```java
public GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `bigtableInput`<sup>Optional</sup> <a name="bigtableInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.bigtableInput"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtable getBigtableInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

---

##### `dedicatedServingEndpointInput`<sup>Optional</sup> <a name="dedicatedServingEndpointInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint getDedicatedServingEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `embeddingManagementInput`<sup>Optional</sup> <a name="embeddingManagementInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.embeddingManagementInput"></a>

```java
public GoogleVertexAiFeatureOnlineStoreEmbeddingManagement getEmbeddingManagementInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optimizedInput`<sup>Optional</sup> <a name="optimizedInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.optimizedInput"></a>

```java
public GoogleVertexAiFeatureOnlineStoreOptimized getOptimizedInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreBigtable <a name="GoogleVertexAiFeatureOnlineStoreBigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreBigtable;

GoogleVertexAiFeatureOnlineStoreBigtable.builder()
    .autoScaling(GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | auto_scaling block. |

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable.property.autoScaling"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#auto_scaling GoogleVertexAiFeatureOnlineStore#auto_scaling}

---

### GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling <a name="GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling;

GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.builder()
    .maxNodeCount(java.lang.Number)
    .minNodeCount(java.lang.Number)
//  .cpuUtilizationTarget(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget">cpuUtilizationTarget</a></code> | <code>java.lang.Number</code> | A percentage of the cluster's CPU capacity. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

The maximum number of nodes to scale up to.

Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#max_node_count GoogleVertexAiFeatureOnlineStore#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#min_node_count GoogleVertexAiFeatureOnlineStore#min_node_count}

---

##### `cpuUtilizationTarget`<sup>Optional</sup> <a name="cpuUtilizationTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget"></a>

```java
public java.lang.Number getCpuUtilizationTarget();
```

- *Type:* java.lang.Number

A percentage of the cluster's CPU capacity.

Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#cpu_utilization_target GoogleVertexAiFeatureOnlineStore#cpu_utilization_target}

---

### GoogleVertexAiFeatureOnlineStoreConfig <a name="GoogleVertexAiFeatureOnlineStoreConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreConfig;

GoogleVertexAiFeatureOnlineStoreConfig.builder()
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
    .name(java.lang.String)
//  .bigtable(GoogleVertexAiFeatureOnlineStoreBigtable)
//  .dedicatedServingEndpoint(GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint)
//  .embeddingManagement(GoogleVertexAiFeatureOnlineStoreEmbeddingManagement)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .optimized(GoogleVertexAiFeatureOnlineStoreOptimized)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiFeatureOnlineStoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.bigtable">bigtable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint">dedicatedServingEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.embeddingManagement">embeddingManagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | embedding_management block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.optimized">optimized</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#name GoogleVertexAiFeatureOnlineStore#name}

---

##### `bigtable`<sup>Optional</sup> <a name="bigtable" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.bigtable"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtable getBigtable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#bigtable GoogleVertexAiFeatureOnlineStore#bigtable}

---

##### `dedicatedServingEndpoint`<sup>Optional</sup> <a name="dedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint getDedicatedServingEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#dedicated_serving_endpoint GoogleVertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `embeddingManagement`<sup>Optional</sup> <a name="embeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.embeddingManagement"></a>

```java
public GoogleVertexAiFeatureOnlineStoreEmbeddingManagement getEmbeddingManagement();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

embedding_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#embedding_management GoogleVertexAiFeatureOnlineStore#embedding_management}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#force_destroy GoogleVertexAiFeatureOnlineStore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#id GoogleVertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#labels GoogleVertexAiFeatureOnlineStore#labels}

---

##### `optimized`<sup>Optional</sup> <a name="optimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.optimized"></a>

```java
public GoogleVertexAiFeatureOnlineStoreOptimized getOptimized();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#optimized GoogleVertexAiFeatureOnlineStore#optimized}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#project GoogleVertexAiFeatureOnlineStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#region GoogleVertexAiFeatureOnlineStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreConfig.property.timeouts"></a>

```java
public GoogleVertexAiFeatureOnlineStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#timeouts GoogleVertexAiFeatureOnlineStore#timeouts}

---

### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint;

GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.builder()
//  .privateServiceConnectConfig(GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig getPrivateServiceConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#private_service_connect_config GoogleVertexAiFeatureOnlineStore#private_service_connect_config}

---

### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;

GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.builder()
    .enablePrivateServiceConnect(java.lang.Boolean)
    .enablePrivateServiceConnect(IResolvable)
//  .projectAllowlist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, customers will use private service connection to send request. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist">projectAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```java
public java.lang.Object getEnablePrivateServiceConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, customers will use private service connection to send request.

Otherwise, the connection will set to public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#enable_private_service_connect GoogleVertexAiFeatureOnlineStore#enable_private_service_connect}

---

##### `projectAllowlist`<sup>Optional</sup> <a name="projectAllowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```java
public java.util.List<java.lang.String> getProjectAllowlist();
```

- *Type:* java.util.List<java.lang.String>

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#project_allowlist GoogleVertexAiFeatureOnlineStore#project_allowlist}

---

### GoogleVertexAiFeatureOnlineStoreEmbeddingManagement <a name="GoogleVertexAiFeatureOnlineStoreEmbeddingManagement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement;

GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable embedding management. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable embedding management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#enabled GoogleVertexAiFeatureOnlineStore#enabled}

---

### GoogleVertexAiFeatureOnlineStoreOptimized <a name="GoogleVertexAiFeatureOnlineStoreOptimized" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreOptimized;

GoogleVertexAiFeatureOnlineStoreOptimized.builder()
    .build();
```


### GoogleVertexAiFeatureOnlineStoreTimeouts <a name="GoogleVertexAiFeatureOnlineStoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreTimeouts;

GoogleVertexAiFeatureOnlineStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#create GoogleVertexAiFeatureOnlineStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#delete GoogleVertexAiFeatureOnlineStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#update GoogleVertexAiFeatureOnlineStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#create GoogleVertexAiFeatureOnlineStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#delete GoogleVertexAiFeatureOnlineStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_feature_online_store#update GoogleVertexAiFeatureOnlineStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference <a name="GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference;

new GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget">resetCpuUtilizationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationTarget` <a name="resetCpuUtilizationTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget"></a>

```java
public void resetCpuUtilizationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput">cpuUtilizationTargetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget">cpuUtilizationTarget</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilizationTargetInput`<sup>Optional</sup> <a name="cpuUtilizationTargetInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput"></a>

```java
public java.lang.Number getCpuUtilizationTargetInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationTarget`<sup>Required</sup> <a name="cpuUtilizationTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget"></a>

```java
public java.lang.Number getCpuUtilizationTarget();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


### GoogleVertexAiFeatureOnlineStoreBigtableOutputReference <a name="GoogleVertexAiFeatureOnlineStoreBigtableOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference;

new GoogleVertexAiFeatureOnlineStoreBigtableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling">putAutoScaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling"></a>

```java
public void putAutoScaling(GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">GoogleVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling getAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling">GoogleVertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiFeatureOnlineStoreBigtable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreBigtable">GoogleVertexAiFeatureOnlineStoreBigtable</a>

---


### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference;

new GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig"></a>

```java
public void putPrivateServiceConnectConfig(GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig"></a>

```java
public void resetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName">publicEndpointDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference getPrivateServiceConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `publicEndpointDomainName`<sup>Required</sup> <a name="publicEndpointDomainName" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName"></a>

```java
public java.lang.String getPublicEndpointDomainName();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig getPrivateServiceConnectConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---


### GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference;

new GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">resetProjectAllowlist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectAllowlist` <a name="resetProjectAllowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```java
public void resetProjectAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">enablePrivateServiceConnectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">projectAllowlistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">projectAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enablePrivateServiceConnectInput`<sup>Optional</sup> <a name="enablePrivateServiceConnectInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```java
public java.lang.Object getEnablePrivateServiceConnectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectAllowlistInput`<sup>Optional</sup> <a name="projectAllowlistInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```java
public java.util.List<java.lang.String> getProjectAllowlistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```java
public java.lang.Object getEnablePrivateServiceConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectAllowlist`<sup>Required</sup> <a name="projectAllowlist" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```java
public java.util.List<java.lang.String> getProjectAllowlist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">GoogleVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference <a name="GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference;

new GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagementOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiFeatureOnlineStoreEmbeddingManagement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreEmbeddingManagement">GoogleVertexAiFeatureOnlineStoreEmbeddingManagement</a>

---


### GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference <a name="GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference;

new GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiFeatureOnlineStoreOptimized getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreOptimized">GoogleVertexAiFeatureOnlineStoreOptimized</a>

---


### GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference <a name="GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_online_store.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference;

new GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStore.GoogleVertexAiFeatureOnlineStoreTimeouts">GoogleVertexAiFeatureOnlineStoreTimeouts</a>

---



