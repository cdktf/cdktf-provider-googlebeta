# `googleCloudAssetProjectFeed` Submodule <a name="`googleCloudAssetProjectFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetProjectFeed <a name="GoogleCloudAssetProjectFeed" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed google_cloud_asset_project_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeed;

GoogleCloudAssetProjectFeed.Builder.create(Construct scope, java.lang.String id)
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
    .feedId(java.lang.String)
    .feedOutputConfig(GoogleCloudAssetProjectFeedFeedOutputConfig)
//  .assetNames(java.util.List<java.lang.String>)
//  .assetTypes(java.util.List<java.lang.String>)
//  .billingProject(java.lang.String)
//  .condition(GoogleCloudAssetProjectFeedCondition)
//  .contentType(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleCloudAssetProjectFeedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedId">feedId</a></code> | <code>java.lang.String</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetNames">assetNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.billingProject">billingProject</a></code> | <code>java.lang.String</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedId"></a>

- *Type:* java.lang.String

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#feed_id GoogleCloudAssetProjectFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.feedOutputConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#feed_output_config GoogleCloudAssetProjectFeed#feed_output_config}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetNames"></a>

- *Type:* java.util.List<java.lang.String>

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#asset_names GoogleCloudAssetProjectFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.assetTypes"></a>

- *Type:* java.util.List<java.lang.String>

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#asset_types GoogleCloudAssetProjectFeed#asset_types}

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.billingProject"></a>

- *Type:* java.lang.String

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#billing_project GoogleCloudAssetProjectFeed#billing_project}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#condition GoogleCloudAssetProjectFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#content_type GoogleCloudAssetProjectFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#timeouts GoogleCloudAssetProjectFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putFeedOutputConfig">putFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetNames">resetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetTypes">resetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetBillingProject">resetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition"></a>

```java
public void putCondition(GoogleCloudAssetProjectFeedCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

---

##### `putFeedOutputConfig` <a name="putFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putFeedOutputConfig"></a>

```java
public void putFeedOutputConfig(GoogleCloudAssetProjectFeedFeedOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudAssetProjectFeedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

---

##### `resetAssetNames` <a name="resetAssetNames" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetNames"></a>

```java
public void resetAssetNames()
```

##### `resetAssetTypes` <a name="resetAssetTypes" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetAssetTypes"></a>

```java
public void resetAssetTypes()
```

##### `resetBillingProject` <a name="resetBillingProject" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetBillingProject"></a>

```java
public void resetBillingProject()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudAssetProjectFeed resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeed;

GoogleCloudAssetProjectFeed.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeed;

GoogleCloudAssetProjectFeed.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeed;

GoogleCloudAssetProjectFeed.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeed;

GoogleCloudAssetProjectFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudAssetProjectFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCloudAssetProjectFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudAssetProjectFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudAssetProjectFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudAssetProjectFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference">GoogleCloudAssetProjectFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference">GoogleCloudAssetProjectFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNamesInput">assetNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypesInput">assetTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProjectInput">billingProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedIdInput">feedIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfigInput">feedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNames">assetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedId">feedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.condition"></a>

```java
public GoogleCloudAssetProjectFeedConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference">GoogleCloudAssetProjectFeedConditionOutputReference</a>

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfig"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference getFeedOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeouts"></a>

```java
public GoogleCloudAssetProjectFeedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference">GoogleCloudAssetProjectFeedTimeoutsOutputReference</a>

---

##### `assetNamesInput`<sup>Optional</sup> <a name="assetNamesInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNamesInput"></a>

```java
public java.util.List<java.lang.String> getAssetNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetTypesInput`<sup>Optional</sup> <a name="assetTypesInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypesInput"></a>

```java
public java.util.List<java.lang.String> getAssetTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProjectInput"></a>

```java
public java.lang.String getBillingProjectInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.conditionInput"></a>

```java
public GoogleCloudAssetProjectFeedCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `feedIdInput`<sup>Optional</sup> <a name="feedIdInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedIdInput"></a>

```java
public java.lang.String getFeedIdInput();
```

- *Type:* java.lang.String

---

##### `feedOutputConfigInput`<sup>Optional</sup> <a name="feedOutputConfigInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedOutputConfigInput"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfig getFeedOutputConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

---

##### `assetNames`<sup>Required</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetNames"></a>

```java
public java.util.List<java.lang.String> getAssetNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetTypes`<sup>Required</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.assetTypes"></a>

```java
public java.util.List<java.lang.String> getAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.feedId"></a>

```java
public java.lang.String getFeedId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeed.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetProjectFeedCondition <a name="GoogleCloudAssetProjectFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedCondition;

GoogleCloudAssetProjectFeedCondition.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#expression GoogleCloudAssetProjectFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#description GoogleCloudAssetProjectFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#location GoogleCloudAssetProjectFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#title GoogleCloudAssetProjectFeed#title}

---

### GoogleCloudAssetProjectFeedConfig <a name="GoogleCloudAssetProjectFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedConfig;

GoogleCloudAssetProjectFeedConfig.builder()
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
    .feedId(java.lang.String)
    .feedOutputConfig(GoogleCloudAssetProjectFeedFeedOutputConfig)
//  .assetNames(java.util.List<java.lang.String>)
//  .assetTypes(java.util.List<java.lang.String>)
//  .billingProject(java.lang.String)
//  .condition(GoogleCloudAssetProjectFeedCondition)
//  .contentType(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleCloudAssetProjectFeedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedId">feedId</a></code> | <code>java.lang.String</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetNames">assetNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedId"></a>

```java
public java.lang.String getFeedId();
```

- *Type:* java.lang.String

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#feed_id GoogleCloudAssetProjectFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.feedOutputConfig"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfig getFeedOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#feed_output_config GoogleCloudAssetProjectFeed#feed_output_config}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetNames"></a>

```java
public java.util.List<java.lang.String> getAssetNames();
```

- *Type:* java.util.List<java.lang.String>

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#asset_names GoogleCloudAssetProjectFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.assetTypes"></a>

```java
public java.util.List<java.lang.String> getAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#asset_types GoogleCloudAssetProjectFeed#asset_types}

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#billing_project GoogleCloudAssetProjectFeed#billing_project}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.condition"></a>

```java
public GoogleCloudAssetProjectFeedCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#condition GoogleCloudAssetProjectFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#content_type GoogleCloudAssetProjectFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#id GoogleCloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConfig.property.timeouts"></a>

```java
public GoogleCloudAssetProjectFeedTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#timeouts GoogleCloudAssetProjectFeed#timeouts}

---

### GoogleCloudAssetProjectFeedFeedOutputConfig <a name="GoogleCloudAssetProjectFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedFeedOutputConfig;

GoogleCloudAssetProjectFeedFeedOutputConfig.builder()
    .pubsubDestination(GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination getPubsubDestination();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#pubsub_destination GoogleCloudAssetProjectFeed#pubsub_destination}

---

### GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination;

GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.builder()
    .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>java.lang.String</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#topic GoogleCloudAssetProjectFeed#topic}

---

### GoogleCloudAssetProjectFeedTimeouts <a name="GoogleCloudAssetProjectFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedTimeouts;

GoogleCloudAssetProjectFeedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#create GoogleCloudAssetProjectFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#delete GoogleCloudAssetProjectFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#update GoogleCloudAssetProjectFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#create GoogleCloudAssetProjectFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#delete GoogleCloudAssetProjectFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_cloud_asset_project_feed#update GoogleCloudAssetProjectFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetProjectFeedConditionOutputReference <a name="GoogleCloudAssetProjectFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedConditionOutputReference;

new GoogleCloudAssetProjectFeedConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedConditionOutputReference.property.internalValue"></a>

```java
public GoogleCloudAssetProjectFeedCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedCondition">GoogleCloudAssetProjectFeedCondition</a>

---


### GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference;

new GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```java
public void putPubsubDestination(GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference getPubsubDestination();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination getPubsubDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfig">GoogleCloudAssetProjectFeedFeedOutputConfig</a>

---


### GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference;

new GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```java
public GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetProjectFeedTimeoutsOutputReference <a name="GoogleCloudAssetProjectFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_project_feed.GoogleCloudAssetProjectFeedTimeoutsOutputReference;

new GoogleCloudAssetProjectFeedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetProjectFeed.GoogleCloudAssetProjectFeedTimeouts">GoogleCloudAssetProjectFeedTimeouts</a>

---



