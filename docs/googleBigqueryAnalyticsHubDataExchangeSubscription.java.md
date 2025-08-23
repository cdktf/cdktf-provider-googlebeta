# `googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscription <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription google_bigquery_analytics_hub_data_exchange_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.Builder.create(Construct scope, java.lang.String id)
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
    .dataExchangeId(java.lang.String)
    .dataExchangeLocation(java.lang.String)
    .dataExchangeProject(java.lang.String)
    .location(java.lang.String)
    .subscriptionId(java.lang.String)
//  .destinationDataset(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .refreshPolicy(java.lang.String)
//  .subscriberContact(java.lang.String)
//  .timeouts(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeLocation">dataExchangeLocation</a></code> | <code>java.lang.String</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeProject">dataExchangeProject</a></code> | <code>java.lang.String</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.refreshPolicy">refreshPolicy</a></code> | <code>java.lang.String</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriberContact">subscriberContact</a></code> | <code>java.lang.String</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeId"></a>

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `dataExchangeLocation`<sup>Required</sup> <a name="dataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeLocation"></a>

- *Type:* java.lang.String

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `dataExchangeProject`<sup>Required</sup> <a name="dataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeProject"></a>

- *Type:* java.lang.String

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `destinationDataset`<sup>Optional</sup> <a name="destinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.destinationDataset"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `refreshPolicy`<sup>Optional</sup> <a name="refreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.refreshPolicy"></a>

- *Type:* java.lang.String

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `subscriberContact`<sup>Optional</sup> <a name="subscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriberContact"></a>

- *Type:* java.lang.String

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset">putDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset">resetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy">resetRefreshPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact">resetSubscriberContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationDataset` <a name="putDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset"></a>

```java
public void putDestinationDataset(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---

##### `resetDestinationDataset` <a name="resetDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset"></a>

```java
public void resetDestinationDataset()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject"></a>

```java
public void resetProject()
```

##### `resetRefreshPolicy` <a name="resetRefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy"></a>

```java
public void resetRefreshPolicy()
```

##### `resetSubscriberContact` <a name="resetSubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact"></a>

```java
public void resetSubscriberContact()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange">dataExchange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime">lastModifyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap">linkedDatasetMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources">linkedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail">logLinkedDatasetQueryUserEmail</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName">organizationDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput">dataExchangeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput">dataExchangeProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput">destinationDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput">refreshPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput">subscriberContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation">dataExchangeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject">dataExchangeProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy">refreshPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact">subscriberContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `dataExchange`<sup>Required</sup> <a name="dataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange"></a>

```java
public java.lang.String getDataExchange();
```

- *Type:* java.lang.String

---

##### `destinationDataset`<sup>Required</sup> <a name="destinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference getDestinationDataset();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a>

---

##### `lastModifyTime`<sup>Required</sup> <a name="lastModifyTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime"></a>

```java
public java.lang.String getLastModifyTime();
```

- *Type:* java.lang.String

---

##### `linkedDatasetMap`<sup>Required</sup> <a name="linkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList getLinkedDatasetMap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a>

---

##### `linkedResources`<sup>Required</sup> <a name="linkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList getLinkedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a>

---

##### `logLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="logLinkedDatasetQueryUserEmail" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```java
public IResolvable getLogLinkedDatasetQueryUserEmail();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organizationDisplayName`<sup>Required</sup> <a name="organizationDisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName"></a>

```java
public java.lang.String getOrganizationDisplayName();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput"></a>

```java
public java.lang.String getDataExchangeIdInput();
```

- *Type:* java.lang.String

---

##### `dataExchangeLocationInput`<sup>Optional</sup> <a name="dataExchangeLocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput"></a>

```java
public java.lang.String getDataExchangeLocationInput();
```

- *Type:* java.lang.String

---

##### `dataExchangeProjectInput`<sup>Optional</sup> <a name="dataExchangeProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput"></a>

```java
public java.lang.String getDataExchangeProjectInput();
```

- *Type:* java.lang.String

---

##### `destinationDatasetInput`<sup>Optional</sup> <a name="destinationDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset getDestinationDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `refreshPolicyInput`<sup>Optional</sup> <a name="refreshPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput"></a>

```java
public java.lang.String getRefreshPolicyInput();
```

- *Type:* java.lang.String

---

##### `subscriberContactInput`<sup>Optional</sup> <a name="subscriberContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput"></a>

```java
public java.lang.String getSubscriberContactInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

---

##### `dataExchangeLocation`<sup>Required</sup> <a name="dataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation"></a>

```java
public java.lang.String getDataExchangeLocation();
```

- *Type:* java.lang.String

---

##### `dataExchangeProject`<sup>Required</sup> <a name="dataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject"></a>

```java
public java.lang.String getDataExchangeProject();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `refreshPolicy`<sup>Required</sup> <a name="refreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy"></a>

```java
public java.lang.String getRefreshPolicy();
```

- *Type:* java.lang.String

---

##### `subscriberContact`<sup>Required</sup> <a name="subscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact"></a>

```java
public java.lang.String getSubscriberContact();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig;

GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.builder()
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
    .dataExchangeId(java.lang.String)
    .dataExchangeLocation(java.lang.String)
    .dataExchangeProject(java.lang.String)
    .location(java.lang.String)
    .subscriptionId(java.lang.String)
//  .destinationDataset(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .refreshPolicy(java.lang.String)
//  .subscriberContact(java.lang.String)
//  .timeouts(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation">dataExchangeLocation</a></code> | <code>java.lang.String</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject">dataExchangeProject</a></code> | <code>java.lang.String</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy">refreshPolicy</a></code> | <code>java.lang.String</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact">subscriberContact</a></code> | <code>java.lang.String</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `dataExchangeLocation`<sup>Required</sup> <a name="dataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation"></a>

```java
public java.lang.String getDataExchangeLocation();
```

- *Type:* java.lang.String

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `dataExchangeProject`<sup>Required</sup> <a name="dataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject"></a>

```java
public java.lang.String getDataExchangeProject();
```

- *Type:* java.lang.String

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `destinationDataset`<sup>Optional</sup> <a name="destinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset getDestinationDataset();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `refreshPolicy`<sup>Optional</sup> <a name="refreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy"></a>

```java
public java.lang.String getRefreshPolicy();
```

- *Type:* java.lang.String

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `subscriberContact`<sup>Optional</sup> <a name="subscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact"></a>

```java
public java.lang.String getSubscriberContact();
```

- *Type:* java.lang.String

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset;

GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.builder()
    .datasetReference(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference">datasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description">description</a></code> | <code>java.lang.String</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this dataset. You can use these to organize and group your datasets. |

---

##### `datasetReference`<sup>Required</sup> <a name="datasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference getDatasetReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_reference GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_reference}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#description GoogleBigqueryAnalyticsHubDataExchangeSubscription#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#friendly_name GoogleBigqueryAnalyticsHubDataExchangeSubscription#friendly_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#labels GoogleBigqueryAnalyticsHubDataExchangeSubscription#labels}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference;

GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.builder()
    .datasetId(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this dataset. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#project_id}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap;

GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap.builder()
    .build();
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources;

GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources.builder()
    .build();
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts;

GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference">putDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetReference` <a name="putDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```java
public void putDatasetReference(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference">datasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">datasetReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetReference`<sup>Required</sup> <a name="datasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference getDatasetReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `datasetReferenceInput`<sup>Optional</sup> <a name="datasetReferenceInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference getDatasetReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">linkedDataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">linkedPubsubSubscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing">listing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linkedDataset`<sup>Required</sup> <a name="linkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```java
public java.lang.String getLinkedDataset();
```

- *Type:* java.lang.String

---

##### `linkedPubsubSubscription`<sup>Required</sup> <a name="linkedPubsubSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```java
public java.lang.String getLinkedPubsubSubscription();
```

- *Type:* java.lang.String

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```java
public java.lang.String getListing();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset">linkedDataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing">listing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linkedDataset`<sup>Required</sup> <a name="linkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```java
public java.lang.String getLinkedDataset();
```

- *Type:* java.lang.String

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```java
public java.lang.String getListing();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_analytics_hub_data_exchange_subscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---



