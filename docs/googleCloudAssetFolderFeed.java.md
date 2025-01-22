# `googleCloudAssetFolderFeed` Submodule <a name="`googleCloudAssetFolderFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetFolderFeed <a name="GoogleCloudAssetFolderFeed" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed google_cloud_asset_folder_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeed;

GoogleCloudAssetFolderFeed.Builder.create(Construct scope, java.lang.String id)
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
    .billingProject(java.lang.String)
    .feedId(java.lang.String)
    .feedOutputConfig(GoogleCloudAssetFolderFeedFeedOutputConfig)
    .folder(java.lang.String)
//  .assetNames(java.util.List<java.lang.String>)
//  .assetTypes(java.util.List<java.lang.String>)
//  .condition(GoogleCloudAssetFolderFeedCondition)
//  .contentType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleCloudAssetFolderFeedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.billingProject">billingProject</a></code> | <code>java.lang.String</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedId">feedId</a></code> | <code>java.lang.String</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The folder this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetNames">assetNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.billingProject"></a>

- *Type:* java.lang.String

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#billing_project GoogleCloudAssetFolderFeed#billing_project}

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedId"></a>

- *Type:* java.lang.String

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#feed_id GoogleCloudAssetFolderFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.feedOutputConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#feed_output_config GoogleCloudAssetFolderFeed#feed_output_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The folder this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#folder GoogleCloudAssetFolderFeed#folder}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetNames"></a>

- *Type:* java.util.List<java.lang.String>

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#asset_names GoogleCloudAssetFolderFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.assetTypes"></a>

- *Type:* java.util.List<java.lang.String>

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#asset_types GoogleCloudAssetFolderFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#condition GoogleCloudAssetFolderFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#content_type GoogleCloudAssetFolderFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#timeouts GoogleCloudAssetFolderFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putFeedOutputConfig">putFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetNames">resetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetTypes">resetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition"></a>

```java
public void putCondition(GoogleCloudAssetFolderFeedCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

---

##### `putFeedOutputConfig` <a name="putFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putFeedOutputConfig"></a>

```java
public void putFeedOutputConfig(GoogleCloudAssetFolderFeedFeedOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudAssetFolderFeedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

---

##### `resetAssetNames` <a name="resetAssetNames" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetNames"></a>

```java
public void resetAssetNames()
```

##### `resetAssetTypes` <a name="resetAssetTypes" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetAssetTypes"></a>

```java
public void resetAssetTypes()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudAssetFolderFeed resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeed;

GoogleCloudAssetFolderFeed.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeed;

GoogleCloudAssetFolderFeed.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeed;

GoogleCloudAssetFolderFeed.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeed;

GoogleCloudAssetFolderFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudAssetFolderFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCloudAssetFolderFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudAssetFolderFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudAssetFolderFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudAssetFolderFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference">GoogleCloudAssetFolderFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderId">folderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference">GoogleCloudAssetFolderFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNamesInput">assetNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypesInput">assetTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProjectInput">billingProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedIdInput">feedIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfigInput">feedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNames">assetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedId">feedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.condition"></a>

```java
public GoogleCloudAssetFolderFeedConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference">GoogleCloudAssetFolderFeedConditionOutputReference</a>

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfig"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference getFeedOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference</a>

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderId"></a>

```java
public java.lang.String getFolderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeouts"></a>

```java
public GoogleCloudAssetFolderFeedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference">GoogleCloudAssetFolderFeedTimeoutsOutputReference</a>

---

##### `assetNamesInput`<sup>Optional</sup> <a name="assetNamesInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNamesInput"></a>

```java
public java.util.List<java.lang.String> getAssetNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetTypesInput`<sup>Optional</sup> <a name="assetTypesInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypesInput"></a>

```java
public java.util.List<java.lang.String> getAssetTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProjectInput"></a>

```java
public java.lang.String getBillingProjectInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.conditionInput"></a>

```java
public GoogleCloudAssetFolderFeedCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `feedIdInput`<sup>Optional</sup> <a name="feedIdInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedIdInput"></a>

```java
public java.lang.String getFeedIdInput();
```

- *Type:* java.lang.String

---

##### `feedOutputConfigInput`<sup>Optional</sup> <a name="feedOutputConfigInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedOutputConfigInput"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfig getFeedOutputConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

---

##### `assetNames`<sup>Required</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetNames"></a>

```java
public java.util.List<java.lang.String> getAssetNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetTypes`<sup>Required</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.assetTypes"></a>

```java
public java.util.List<java.lang.String> getAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.feedId"></a>

```java
public java.lang.String getFeedId();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeed.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetFolderFeedCondition <a name="GoogleCloudAssetFolderFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedCondition;

GoogleCloudAssetFolderFeedCondition.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#expression GoogleCloudAssetFolderFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#description GoogleCloudAssetFolderFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#location GoogleCloudAssetFolderFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#title GoogleCloudAssetFolderFeed#title}

---

### GoogleCloudAssetFolderFeedConfig <a name="GoogleCloudAssetFolderFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedConfig;

GoogleCloudAssetFolderFeedConfig.builder()
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
    .billingProject(java.lang.String)
    .feedId(java.lang.String)
    .feedOutputConfig(GoogleCloudAssetFolderFeedFeedOutputConfig)
    .folder(java.lang.String)
//  .assetNames(java.util.List<java.lang.String>)
//  .assetTypes(java.util.List<java.lang.String>)
//  .condition(GoogleCloudAssetFolderFeedCondition)
//  .contentType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleCloudAssetFolderFeedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedId">feedId</a></code> | <code>java.lang.String</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The folder this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetNames">assetNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#billing_project GoogleCloudAssetFolderFeed#billing_project}

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedId"></a>

```java
public java.lang.String getFeedId();
```

- *Type:* java.lang.String

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#feed_id GoogleCloudAssetFolderFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.feedOutputConfig"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfig getFeedOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#feed_output_config GoogleCloudAssetFolderFeed#feed_output_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The folder this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#folder GoogleCloudAssetFolderFeed#folder}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetNames"></a>

```java
public java.util.List<java.lang.String> getAssetNames();
```

- *Type:* java.util.List<java.lang.String>

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#asset_names GoogleCloudAssetFolderFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.assetTypes"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#asset_types GoogleCloudAssetFolderFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.condition"></a>

```java
public GoogleCloudAssetFolderFeedCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#condition GoogleCloudAssetFolderFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#content_type GoogleCloudAssetFolderFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#id GoogleCloudAssetFolderFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConfig.property.timeouts"></a>

```java
public GoogleCloudAssetFolderFeedTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#timeouts GoogleCloudAssetFolderFeed#timeouts}

---

### GoogleCloudAssetFolderFeedFeedOutputConfig <a name="GoogleCloudAssetFolderFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedFeedOutputConfig;

GoogleCloudAssetFolderFeedFeedOutputConfig.builder()
    .pubsubDestination(GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig.property.pubsubDestination"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination getPubsubDestination();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#pubsub_destination GoogleCloudAssetFolderFeed#pubsub_destination}

---

### GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination;

GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.builder()
    .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>java.lang.String</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#topic GoogleCloudAssetFolderFeed#topic}

---

### GoogleCloudAssetFolderFeedTimeouts <a name="GoogleCloudAssetFolderFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedTimeouts;

GoogleCloudAssetFolderFeedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#create GoogleCloudAssetFolderFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#delete GoogleCloudAssetFolderFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#update GoogleCloudAssetFolderFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#create GoogleCloudAssetFolderFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#delete GoogleCloudAssetFolderFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_asset_folder_feed#update GoogleCloudAssetFolderFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetFolderFeedConditionOutputReference <a name="GoogleCloudAssetFolderFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedConditionOutputReference;

new GoogleCloudAssetFolderFeedConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedConditionOutputReference.property.internalValue"></a>

```java
public GoogleCloudAssetFolderFeedCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedCondition">GoogleCloudAssetFolderFeedCondition</a>

---


### GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference;

new GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```java
public void putPubsubDestination(GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference getPubsubDestination();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination getPubsubDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfig">GoogleCloudAssetFolderFeedFeedOutputConfig</a>

---


### GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference;

new GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```java
public GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetFolderFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetFolderFeedTimeoutsOutputReference <a name="GoogleCloudAssetFolderFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_asset_folder_feed.GoogleCloudAssetFolderFeedTimeoutsOutputReference;

new GoogleCloudAssetFolderFeedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudAssetFolderFeed.GoogleCloudAssetFolderFeedTimeouts">GoogleCloudAssetFolderFeedTimeouts</a>

---



